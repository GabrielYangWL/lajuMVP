import { db } from "@/lib/db";
import type { CreateUserInput } from "../types";

export const userRepository = {
  async findById(id: string) {
    return db.user.findUnique({ where: { id } });
  },

  async upsert(input: CreateUserInput) {
    return db.user.upsert({
      where: { id: input.id },
      create: input,
      update: { email: input.email },
    });
  },
};
