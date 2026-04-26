import type { Metadata } from "next";

export const metadata: Metadata = { title: "Profil" };

export default function ProfilPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>
      {/* ProfileForm component goes here */}
    </section>
  );
}
