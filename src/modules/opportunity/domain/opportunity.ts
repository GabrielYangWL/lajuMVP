import type { ApplicationStatus } from "../types";

const VALID_TRANSITIONS: Record<ApplicationStatus, ApplicationStatus[]> = {
  DRAFTED: ["SUBMITTED"],
  SUBMITTED: ["REVIEWED", "REJECTED"],
  REVIEWED: ["INTERVIEW", "REJECTED"],
  INTERVIEW: ["OFFER", "REJECTED"],
  OFFER: [],
  REJECTED: [],
};

export function canTransition(
  from: ApplicationStatus,
  to: ApplicationStatus
): boolean {
  return VALID_TRANSITIONS[from]?.includes(to) ?? false;
}
