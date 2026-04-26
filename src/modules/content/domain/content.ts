export function isPublished(publishedAt: Date | null): boolean {
  if (!publishedAt) return false;
  return publishedAt <= new Date();
}
