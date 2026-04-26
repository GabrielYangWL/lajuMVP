import { NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ok, unauthorized, badRequest } from "@/lib/api/response";
import { mimpiService } from "@/modules/mimpi/services/mimpi.service";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; taskId: string }> }
) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  const { id: mimpiId, taskId } = await params;
  const idempotencyKey = request.headers.get("x-idempotency-key");
  if (!idempotencyKey) return badRequest("Header x-idempotency-key wajib diisi");

  const { result } = await mimpiService.completeTask(user.id, {
    taskId,
    mimpiId,
    idempotencyKey,
  });
  return ok(result);
}
