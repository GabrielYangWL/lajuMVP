import type { Metadata } from "next";

export const metadata: Metadata = { title: "Check-In" };

export default async function CheckInDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Isi Check-In</h1>
      {/* CheckInForm — id: {id} */}
    </section>
  );
}
