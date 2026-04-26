import { db } from "@/lib/db";
import type { CheckInType, CheckInStatus } from "@prisma/client";

export const checkInRepository = {
  async findByUser(
    userId: string,
    opts: { cursor?: string; limit: number; type?: CheckInType }
  ) {
    return db.checkIn.findMany({
      where: {
        userId,
        ...(opts.type ? { type: opts.type } : {}),
        ...(opts.cursor ? { id: { lt: opts.cursor } } : {}),
      },
      orderBy: { periodStart: "desc" },
      take: opts.limit + 1,
    });
  },

  async create(userId: string, type: CheckInType, periodStart: Date) {
    return db.checkIn.create({
      data: { userId, type, periodStart, status: "NOT_STARTED" },
    });
  },

  async transition(id: string, status: CheckInStatus, submittedAt?: Date) {
    return db.checkIn.update({
      where: { id },
      data: { status, ...(submittedAt ? { submittedAt } : {}) },
    });
  },
};
