import { db } from "@/lib/db";
import type { AiMode } from "@prisma/client";

export const aiReportRepository = {
  async findLatestByUser(userId: string) {
    return db.aiReport.findFirst({
      where: { userId },
      orderBy: { generatedAt: "desc" },
    });
  },

  async create(
    userId: string,
    mode: AiMode,
    output: {
      progressScore?: number;
      characterScore?: number;
      mentalScore?: number;
      writtenAdvice?: string;
      rawPrompt?: string;
      rawResponse?: string;
    }
  ) {
    return db.aiReport.create({ data: { userId, mode, ...output } });
  },
};
