import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ok, unauthorized } from "@/lib/api/response";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  // TODO: return subscription portal URL
  return ok({ message: "stub" });
}
