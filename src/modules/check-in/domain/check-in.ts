import type { CheckInStatus } from "../types";

const VALID_TRANSITIONS: Record<CheckInStatus, CheckInStatus[]> = {
  NOT_STARTED: ["IN_PROGRESS"],
  IN_PROGRESS: ["SUBMITTED"],
  SUBMITTED: [],
};

export function canTransition(
  from: CheckInStatus,
  to: CheckInStatus
): boolean {
  return VALID_TRANSITIONS[from]?.includes(to) ?? false;
}

export function validateScore(label: string, score: number): void {
  if (score < 1 || score > 10) {
    throw new Error(`${label} harus antara 1 dan 10`);
  }
}
