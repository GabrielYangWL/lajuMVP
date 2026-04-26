import { db } from "@/lib/db";
import type { UpdateBlueprintInput } from "../types";

export const blueprintRepository = {
  async findByUserId(userId: string) {
    return db.blueprint.findUnique({
      where: { userId },
      include: {
        priorities: { orderBy: { order: "asc" } },
        timelineEntries: { orderBy: { targetDate: "asc" } },
      },
    });
  },

  async upsert(userId: string, input: UpdateBlueprintInput) {
    return db.blueprint.upsert({
      where: { userId },
      create: { userId, ...input },
      update: input,
    });
  },
};
