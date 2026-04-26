import type { SubscriptionStatus } from "../types";

const VALID_TRANSITIONS: Record<SubscriptionStatus, SubscriptionStatus[]> = {
  PENDING: ["ACTIVE"],
  ACTIVE: ["GRACE_PERIOD", "CANCELED"],
  GRACE_PERIOD: ["ACTIVE", "CANCELED"],
  CANCELED: [],
};

export function canTransition(
  from: SubscriptionStatus,
  to: SubscriptionStatus
): boolean {
  return VALID_TRANSITIONS[from]?.includes(to) ?? false;
}
