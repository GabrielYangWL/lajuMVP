export const notificationService = {
  async list(_userId: string, _cursor?: string, _limit?: number) {
    // TODO: notificationRepository.findByUser + buildPaginatedResponse
    throw new Error("Not implemented");
  },

  async send(_userId: string, _type: unknown, _title: string, _body?: string) {
    // TODO: notificationRepository.create — async fan-out happens here
    throw new Error("Not implemented");
  },
};
