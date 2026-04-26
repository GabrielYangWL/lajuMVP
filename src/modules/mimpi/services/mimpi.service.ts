import { mimpiRepository } from "../repository/mimpi.repository";
import {
  canTransition,
  validateNewMimpi,
  MAX_ACTIVE_MIMPI,
} from "../domain/mimpi";
import { withIdempotency } from "@/lib/api/idempotency";
import {
  NotFoundError,
  ConflictError,
} from "@/lib/api/errors";
import { buildPaginatedResponse } from "@/lib/api/pagination";
import type {
  CreateMimpiInput,
  UpdateMimpiInput,
  CompleteTaskInput,
} from "../types";
import type { MimpiStatus } from "@prisma/client";
import { db } from "@/lib/db";

export const mimpiService = {
  async list(userId: string, cursor?: string, limit = 20) {
    const items = await mimpiRepository.findAllByUser(userId, {
      cursor,
      limit,
    });
    return buildPaginatedResponse(items, limit);
  },

  async get(id: string, userId: string) {
    const mimpi = await mimpiRepository.findById(id, userId);
    if (!mimpi) throw new NotFoundError("Mimpi");
    return mimpi;
  },

  async create(userId: string, input: CreateMimpiInput) {
    validateNewMimpi(input.title);
    const activeCount = await mimpiRepository.countActiveByUser(userId);
    if (activeCount >= MAX_ACTIVE_MIMPI) {
      throw new ConflictError(
        `Maksimal ${MAX_ACTIVE_MIMPI} Mimpi aktif. Arsipkan salah satu dulu.`
      );
    }
    return mimpiRepository.create(userId, input);
  },

  async update(id: string, userId: string, input: UpdateMimpiInput) {
    await this.get(id, userId);
    return mimpiRepository.update(id, input);
  },

  async transition(id: string, userId: string, to: MimpiStatus) {
    const mimpi = await this.get(id, userId);
    if (!canTransition(mimpi.status, to)) {
      throw new ConflictError(
        `Tidak dapat mengubah status dari ${mimpi.status} ke ${to}`
      );
    }
    return mimpiRepository.transition(id, to);
  },

  async completeTask(userId: string, input: CompleteTaskInput) {
    return withIdempotency(
      userId,
      input.idempotencyKey,
      86_400_000,
      async () => {
        return db.task.update({
          where: { id: input.taskId },
          data: { completedAt: new Date() },
        });
      }
    );
  },
};
