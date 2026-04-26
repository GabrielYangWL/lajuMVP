export const MAX_PRIORITIES = 5;

export function validateVision(vision: string): void {
  if (vision.length > 500) {
    throw new Error("Pernyataan visi maksimal 500 karakter");
  }
}
