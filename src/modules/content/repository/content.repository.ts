export const contentRepository = {
  async findPublished(_opts: { cursor?: string; limit: number }) {
    // TODO: query content source (CMS or DB table)
    return [];
  },
};
