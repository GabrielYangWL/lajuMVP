import { db } from "@/lib/db";
import type { NotificationType } from "@prisma/client";

export const notificationRepository = {
  async findByUser(userId: string, opts: { cursor?: string; limit: number }) {
    return db.notification.findMany({
      where: {
        userId,
        ...(opts.cursor ? { id: { lt: opts.cursor } } : {}),
      },
      orderBy: { createdAt: "desc" },
      take: opts.limit + 1,
    });
  },

  async create(
    userId: string,
    type: NotificationType,
    title: string,
    body?: string
  ) {
    return db.notification.create({ data: { userId, type, title, body } });
  },

  async markRead(id: string) {
    return db.notification.update({
      where: { id },
      data: { readAt: new Date() },
    });
  },
};
