import type { User } from "@prisma/client";

export type { User };

export interface CreateUserInput {
  id: string;
  email: string;
}
