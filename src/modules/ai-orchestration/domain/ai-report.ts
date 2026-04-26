export function validateScore(label: string, score: number): void {
  if (score < 0 || score > 100) {
    throw new Error(`${label} harus antara 0 dan 100`);
  }
}

// Scores must never be presented as medical diagnosis
export const MENTAL_HEALTH_DISCLAIMER =
  "Skor kesehatan mental ini bukan diagnosis medis. Jika kamu membutuhkan bantuan profesional, silakan hubungi psikolog atau konselor.";
