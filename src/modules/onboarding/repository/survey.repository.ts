import { db } from "@/lib/db";

export const surveyRepository = {
  async findByUserId(userId: string) {
    return db.surveyResponse.findUnique({ where: { userId } });
  },

  async upsert(userId: string, answers: object) {
    return db.surveyResponse.upsert({
      where: { userId },
      create: { userId, answers },
      update: { answers },
    });
  },

  async complete(userId: string) {
    return db.surveyResponse.update({
      where: { userId },
      data: { completedAt: new Date() },
    });
  },
};
