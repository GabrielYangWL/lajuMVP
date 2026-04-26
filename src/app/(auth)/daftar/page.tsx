import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Daftar" };

export default function DaftarPage() {
  return (
    <main className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h1 className="text-2xl font-bold text-center mb-2">Buat Akun LAJU</h1>
      <p className="text-gray-500 text-center mb-8 text-sm">
        Gratis. Mulai perjalanan kariermu hari ini.
      </p>
      {/* RegisterForm component goes here */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Sudah punya akun?{" "}
        <Link href="/masuk" className="text-laju-500 font-medium hover:underline">
          Masuk
        </Link>
      </p>
    </main>
  );
}
