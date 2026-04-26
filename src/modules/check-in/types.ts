import type { CheckIn, CheckInType, CheckInStatus } from "@prisma/client";

export type { CheckIn, CheckInType, CheckInStatus };

export interface CreateCheckInInput {
  type: CheckInType;
  periodStart: Date;
}

export interface SubmitCheckInInput {
  mood?: number;
  confidence?: number;
  focus?: number;
  progress?: number;
  blockers?: string;
  notes?: string;
}
