import { db } from "@/lib/db";
import type { SubscriptionStatus } from "@prisma/client";

export const subscriptionRepository = {
  async findByUserId(userId: string) {
    return db.subscription.findUnique({ where: { userId } });
  },

  async transition(userId: string, status: SubscriptionStatus) {
    return db.subscription.update({ where: { userId }, data: { status } });
  },
};
