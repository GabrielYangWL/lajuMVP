import { db } from "@/lib/db";

export async function withIdempotency<T>(
  userId: string,
  key: string,
  ttlMs: number,
  handler: () => Promise<T>
): Promise<{ result: T; cached: boolean }> {
  const existing = await db.idempotencyKey.findUnique({
    where: { userId_key: { userId, key } },
  });

  if (existing && existing.expiresAt > new Date()) {
    return { result: existing.response as T, cached: true };
  }

  const result = await handler();

  const expiresAt = new Date(Date.now() + ttlMs);
  await db.idempotencyKey.upsert({
    where: { userId_key: { userId, key } },
    create: { userId, key, response: result as object, expiresAt },
    update: { response: result as object, expiresAt },
  });

  return { result, cached: false };
}
