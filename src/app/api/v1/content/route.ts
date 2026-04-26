import { NextRequest } from "next/server";
import { ok } from "@/lib/api/response";

export async function GET(request: NextRequest) {
  void request;
  return ok({ message: "stub" });
}
