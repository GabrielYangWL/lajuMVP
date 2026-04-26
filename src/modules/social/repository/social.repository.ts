import { db } from "@/lib/db";

export const socialRepository = {
  async findFeed(userId: string, opts: { cursor?: string; limit: number }) {
    return db.post.findMany({
      where: opts.cursor ? { id: { lt: opts.cursor } } : undefined,
      orderBy: { createdAt: "desc" },
      take: opts.limit + 1,
      include: { user: { select: { id: true, email: true, profile: true } } },
    });
  },

  async createPost(userId: string, content: string) {
    return db.post.create({ data: { userId, content } });
  },
};
