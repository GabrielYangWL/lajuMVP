import { NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { mimpiService } from "@/modules/mimpi/services/mimpi.service";
import {
  ok,
  unauthorized,
  notFound,
  conflict,
  badRequest,
  internalError,
} from "@/lib/api/response";
import { NotFoundError, ConflictError } from "@/lib/api/errors";
import { z } from "zod";

const UpdateMimpiSchema = z.object({
  title: z.string().min(3).max(200).optional(),
  objective: z.string().optional(),
  targetDate: z.coerce.date().optional(),
  status: z
    .enum(["DRAFT", "ACTIVE", "PAUSED", "ARCHIVED", "COMPLETED"])
    .optional(),
});

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  const { id } = await params;
  try {
    const mimpi = await mimpiService.get(id, user.id);
    return ok(mimpi);
  } catch (e) {
    if (e instanceof NotFoundError) return notFound("Mimpi");
    return internalError();
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  const { id } = await params;
  const body = await request.json().catch(() => null);
  const parsed = UpdateMimpiSchema.safeParse(body);
  if (!parsed.success) return badRequest(parsed.error.message);

  const { status, ...updateFields } = parsed.data;

  try {
    if (status) {
      const updated = await mimpiService.transition(id, user.id, status);
      return ok(updated);
    }
    const updated = await mimpiService.update(id, user.id, updateFields);
    return ok(updated);
  } catch (e) {
    if (e instanceof NotFoundError) return notFound("Mimpi");
    if (e instanceof ConflictError) return conflict(e.message);
    return internalError();
  }
}
