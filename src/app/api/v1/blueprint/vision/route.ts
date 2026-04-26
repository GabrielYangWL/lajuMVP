import { NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ok, unauthorized } from "@/lib/api/response";

export async function PATCH(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  // TODO: blueprintService.updateVision(user.id, body)
  void request;
  return ok({ message: "stub" });
}
