import { NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { mimpiService } from "@/modules/mimpi/services/mimpi.service";
import {
  ok,
  created,
  unauthorized,
  badRequest,
  conflict,
  internalError,
} from "@/lib/api/response";
import { parsePaginationParams, decodeCursor } from "@/lib/api/pagination";
import { ConflictError, NotFoundError } from "@/lib/api/errors";
import { z } from "zod";

const CreateMimpiSchema = z.object({
  title: z.string().min(3).max(200),
  objective: z.string().optional(),
  targetDate: z.coerce.date().optional(),
});

export async function GET(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  const { cursor, limit } = parsePaginationParams(request.nextUrl.searchParams);
  const decodedCursor = cursor ? decodeCursor(cursor) : undefined;

  const result = await mimpiService.list(user.id, decodedCursor, limit);
  return ok(result);
}

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  const body = await request.json().catch(() => null);
  const parsed = CreateMimpiSchema.safeParse(body);
  if (!parsed.success) return badRequest(parsed.error.message);

  try {
    const mimpi = await mimpiService.create(user.id, parsed.data);
    return created(mimpi);
  } catch (e) {
    if (e instanceof ConflictError) return conflict(e.message);
    if (e instanceof NotFoundError) return badRequest(e.message);
    return internalError();
  }
}
