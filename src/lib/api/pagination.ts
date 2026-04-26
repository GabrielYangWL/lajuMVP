export interface PaginatedResponse<T> {
  data: T[];
  nextCursor: string | null;
  hasMore: boolean;
}

export interface PaginationParams {
  cursor?: string;
  limit: number;
}

export function parsePaginationParams(
  searchParams: URLSearchParams
): PaginationParams {
  const cursor = searchParams.get("cursor") ?? undefined;
  const limitRaw = searchParams.get("limit");
  const limit = limitRaw ? Math.min(parseInt(limitRaw, 10), 100) : 20;
  return { cursor, limit };
}

export function encodeCursor(id: string): string {
  return Buffer.from(id).toString("base64url");
}

export function decodeCursor(cursor: string): string {
  return Buffer.from(cursor, "base64url").toString("utf-8");
}

export function buildPaginatedResponse<T extends { id: string }>(
  items: T[],
  limit: number
): PaginatedResponse<T> {
  const hasMore = items.length > limit;
  const data = hasMore ? items.slice(0, limit) : items;
  const nextCursor = hasMore ? encodeCursor(data[data.length - 1].id) : null;
  return { data, nextCursor, hasMore };
}
