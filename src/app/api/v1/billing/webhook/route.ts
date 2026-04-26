import { NextRequest, NextResponse } from "next/server";

// Midtrans calls this endpoint — no user auth
export async function POST(request: NextRequest) {
  const payload = await request.json().catch(() => null);
  if (!payload) return new NextResponse(null, { status: 400 });

  // TODO: verify Midtrans signature, handle payment state transitions, log EventLog
  return new NextResponse(null, { status: 200 });
}
