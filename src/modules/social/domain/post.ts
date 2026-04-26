export const MAX_POST_LENGTH = 2000;

export function validatePost(content: string): void {
  if (!content || content.trim().length === 0) {
    throw new Error("Konten postingan tidak boleh kosong");
  }
  if (content.length > MAX_POST_LENGTH) {
    throw new Error(`Postingan maksimal ${MAX_POST_LENGTH} karakter`);
  }
}
