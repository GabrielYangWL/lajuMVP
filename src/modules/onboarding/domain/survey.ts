export function validateConfidenceScore(score: number): void {
  if (score < 1 || score > 10) {
    throw new Error("Skor kepercayaan diri harus antara 1 dan 10");
  }
}
