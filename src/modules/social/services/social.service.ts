export const socialService = {
  async getFeed(_userId: string, _cursor?: string, _limit?: number) {
    // TODO: socialRepository.findFeed + buildPaginatedResponse
    throw new Error("Not implemented");
  },

  async createPost(_userId: string, _content: string) {
    // TODO: validatePost, socialRepository.createPost
    throw new Error("Not implemented");
  },
};
