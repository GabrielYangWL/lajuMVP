import { db } from "@/lib/db";
import type { UpdateProfileInput } from "../types";

export const profileRepository = {
  async findByUserId(userId: string) {
    return db.profile.findUnique({
      where: { userId },
      include: { experiences: true, skills: true, educations: true },
    });
  },

  async upsert(userId: string, input: UpdateProfileInput & { skorPengisian?: number }) {
    return db.profile.upsert({
      where: { userId },
      create: { userId, ...input },
      update: input,
    });
  },
};
