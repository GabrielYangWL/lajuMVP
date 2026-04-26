import type { AiReport, AiMode } from "@prisma/client";

export type { AiReport, AiMode };

export interface AiContext {
  userId: string;
  blueprint?: unknown;
  activeMimpi?: unknown[];
  recentCheckIns?: unknown[];
}

export interface AiReportOutput {
  progressScore?: number;
  characterScore?: number;
  mentalScore?: number;
  writtenAdvice: string;
}
