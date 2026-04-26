import type { Metadata } from "next";

export const metadata: Metadata = { title: "Detail Lamaran" };

export default async function LamaranDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Detail Lamaran</h1>
      {/* ApplicationDetail — id: {id} */}
    </section>
  );
}
