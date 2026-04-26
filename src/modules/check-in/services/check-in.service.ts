export const checkInService = {
  async list(_userId: string, _cursor?: string, _limit?: number) {
    // TODO: checkInRepository.findByUser + buildPaginatedResponse
    throw new Error("Not implemented");
  },

  async start(_userId: string, _type: unknown, _periodStart: Date) {
    // TODO: create check-in, transition to IN_PROGRESS
    throw new Error("Not implemented");
  },

  async submit(_id: string, _userId: string, _input: unknown) {
    // TODO: validate scores, transition to SUBMITTED, trigger scoring
    throw new Error("Not implemented");
  },
};
