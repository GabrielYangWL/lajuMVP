import { db } from "@/lib/db";
import type { CreateMimpiInput, UpdateMimpiInput } from "../types";
import type { MimpiStatus } from "@prisma/client";

export const mimpiRepository = {
  async findAllByUser(
    userId: string,
    opts: { cursor?: string; limit: number; status?: MimpiStatus }
  ) {
    return db.mimpi.findMany({
      where: {
        userId,
        ...(opts.status ? { status: opts.status } : {}),
        ...(opts.cursor ? { id: { lt: opts.cursor } } : {}),
      },
      orderBy: { createdAt: "desc" },
      take: opts.limit + 1,
    });
  },

  async findById(id: string, userId: string) {
    return db.mimpi.findFirst({
      where: { id, userId },
      include: {
        curriculumItems: { orderBy: { order: "asc" } },
        tasks: { orderBy: { dueDate: "asc" } },
        progressLogs: { orderBy: { createdAt: "desc" }, take: 20 },
      },
    });
  },

  async countActiveByUser(userId: string) {
    return db.mimpi.count({ where: { userId, status: "ACTIVE" } });
  },

  async create(userId: string, input: CreateMimpiInput) {
    return db.mimpi.create({
      data: { userId, ...input, status: "DRAFT" },
    });
  },

  async update(id: string, input: UpdateMimpiInput) {
    return db.mimpi.update({ where: { id }, data: input });
  },

  async transition(id: string, status: MimpiStatus) {
    return db.mimpi.update({ where: { id }, data: { status } });
  },
};
