export const opportunityService = {
  async listApplications(_userId: string, _cursor?: string, _limit?: number) {
    // TODO: opportunityRepository.findApplicationsByUser + buildPaginatedResponse
    throw new Error("Not implemented");
  },

  async createApplication(_userId: string, _input: unknown) {
    // TODO: validate, opportunityRepository.createApplication
    throw new Error("Not implemented");
  },

  async transitionApplication(
    _id: string,
    _userId: string,
    _to: unknown
  ) {
    // TODO: ownership check, canTransition, opportunityRepository.transitionApplication
    throw new Error("Not implemented");
  },
};
