import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Lupa Kata Sandi" };

export default function LupaKataSandiPage() {
  return (
    <main className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h1 className="text-2xl font-bold text-center mb-2">Lupa Kata Sandi?</h1>
      <p className="text-gray-500 text-center mb-8 text-sm">
        Kami akan kirimkan tautan reset ke emailmu.
      </p>
      {/* ForgotPasswordForm component goes here */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Ingat kata sandimu?{" "}
        <Link href="/masuk" className="text-laju-500 font-medium hover:underline">
          Kembali masuk
        </Link>
      </p>
    </main>
  );
}
