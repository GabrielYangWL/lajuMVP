import { db } from "@/lib/db";
import type { ApplicationStatus } from "@prisma/client";

export const opportunityRepository = {
  async findApplicationsByUser(
    userId: string,
    opts: { cursor?: string; limit: number }
  ) {
    return db.application.findMany({
      where: {
        userId,
        ...(opts.cursor ? { id: { lt: opts.cursor } } : {}),
      },
      orderBy: { createdAt: "desc" },
      take: opts.limit + 1,
    });
  },

  async createApplication(
    userId: string,
    input: { companyName: string; roleName: string; opportunityId?: string }
  ) {
    return db.application.create({
      data: { userId, ...input, status: "DRAFTED" },
    });
  },

  async transitionApplication(id: string, status: ApplicationStatus) {
    return db.application.update({ where: { id }, data: { status } });
  },
};
