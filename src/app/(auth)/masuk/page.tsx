import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Masuk" };

export default function MasukPage() {
  return (
    <main className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h1 className="text-2xl font-bold text-center mb-2">Masuk ke LAJU</h1>
      <p className="text-gray-500 text-center mb-8 text-sm">
        Selamat datang kembali
      </p>
      {/* LoginForm component goes here */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Belum punya akun?{" "}
        <Link href="/daftar" className="text-laju-500 font-medium hover:underline">
          Daftar sekarang
        </Link>
      </p>
    </main>
  );
}
