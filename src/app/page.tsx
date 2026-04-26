import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LAJU — Sistem Operasi Karier untuk Anak Muda Indonesia",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <h1 className="text-4xl font-bold text-laju-900 mb-4">LAJU</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Sistem operasi karier untuk anak muda Indonesia. Tentukan tujuan, bangun
        rencana, dan berkembang konsisten.
      </p>
      <div className="flex gap-4">
        <Link
          href="/daftar"
          className="px-6 py-3 bg-laju-500 text-white rounded-lg font-medium hover:bg-laju-600 transition-colors"
        >
          Mulai Gratis
        </Link>
        <Link
          href="/masuk"
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          Masuk
        </Link>
      </div>
    </main>
  );
}
