import { NextResponse } from "next/server";

export function ok<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

export function created<T>(data: T) {
  return ok(data, 201);
}

export function noContent() {
  return new NextResponse(null, { status: 204 });
}

export function badRequest(message: string) {
  return NextResponse.json(
    { success: false, error: { message } },
    { status: 400 }
  );
}

export function unauthorized() {
  return NextResponse.json(
    { success: false, error: { message: "Tidak terautentikasi" } },
    { status: 401 }
  );
}

export function forbidden() {
  return NextResponse.json(
    { success: false, error: { message: "Akses ditolak" } },
    { status: 403 }
  );
}

export function notFound(resource = "Sumber daya") {
  return NextResponse.json(
    { success: false, error: { message: `${resource} tidak ditemukan` } },
    { status: 404 }
  );
}

export function conflict(message: string) {
  return NextResponse.json(
    { success: false, error: { message } },
    { status: 409 }
  );
}

export function internalError(message = "Terjadi kesalahan internal") {
  return NextResponse.json(
    { success: false, error: { message } },
    { status: 500 }
  );
}
