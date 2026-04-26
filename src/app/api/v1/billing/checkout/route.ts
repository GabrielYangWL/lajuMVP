import { NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ok, unauthorized, badRequest } from "@/lib/api/response";

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  const idempotencyKey = request.headers.get("x-idempotency-key");
  if (!idempotencyKey) {
    return badRequest("Header x-idempotency-key wajib diisi");
  }

  // TODO: billingService.createCheckout(user.id, idempotencyKey)
  return ok({ message: "stub" });
}
