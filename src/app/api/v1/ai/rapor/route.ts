import { NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ok, unauthorized } from "@/lib/api/response";

// AI report generation is always async — this endpoint enqueues the job
// and returns immediately. The result is fetched via GET once ready.
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  // TODO: return latest AI report for user
  return ok({ message: "stub" });
}

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return unauthorized();

  void request;
  // TODO: enqueue AI report generation job
  return ok({ queued: true });
}
