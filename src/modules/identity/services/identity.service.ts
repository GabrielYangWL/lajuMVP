import { userRepository } from "../repository/user.repository";
import type { CreateUserInput } from "../types";

export const identityService = {
  async getOrCreate(input: CreateUserInput) {
    return userRepository.upsert(input);
  },

  async get(id: string) {
    return userRepository.findById(id);
  },
};
