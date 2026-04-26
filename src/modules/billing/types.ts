import type { Subscription, SubscriptionStatus } from "@prisma/client";

export type { Subscription, SubscriptionStatus };

export interface CreateCheckoutInput {
  userId: string;
  idempotencyKey: string;
}
