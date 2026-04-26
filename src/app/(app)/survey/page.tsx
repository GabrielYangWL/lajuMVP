import type { Metadata } from "next";

export const metadata: Metadata = { title: "Survei Awal" };

export default function SurveyPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Kenali Dirimu</h1>
      <p className="text-gray-600 mb-8">
        Beberapa pertanyaan untuk membantu kami memahami tujuan dan latar belakangmu.
      </p>
      {/* SurveyForm component goes here */}
    </section>
  );
}
