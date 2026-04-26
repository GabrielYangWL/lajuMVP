import type { SurveyResponse } from "@prisma/client";

export type { SurveyResponse };

export interface SurveyAnswers {
  goals?: string[];
  background?: string;
  confidence?: number;
  timeline?: string;
  interests?: string[];
  blockers?: string[];
}
