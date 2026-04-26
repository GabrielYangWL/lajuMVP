import type { Metadata } from "next";

export const metadata: Metadata = { title: "Detail Mimpi" };

export default async function MimpiDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Detail Mimpi</h1>
      {/* MimpiDetail: curriculum, tasks, progress log, discussion — id: {id} */}
    </section>
  );
}
