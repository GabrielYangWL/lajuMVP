import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ok, unauthorized } from "@/lib/api/response";

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return unauthorized();

  return ok({ id: user.id, email: user.email });
}
