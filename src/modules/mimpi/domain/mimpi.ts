import type { MimpiStatus } from "../types";

const VALID_TRANSITIONS: Record<MimpiStatus, MimpiStatus[]> = {
  DRAFT: ["ACTIVE"],
  ACTIVE: ["PAUSED", "COMPLETED", "ARCHIVED"],
  PAUSED: ["ACTIVE", "ARCHIVED"],
  ARCHIVED: [],
  COMPLETED: ["ARCHIVED"],
};

export const MAX_ACTIVE_MIMPI = 5;

export function canTransition(from: MimpiStatus, to: MimpiStatus): boolean {
  return VALID_TRANSITIONS[from]?.includes(to) ?? false;
}

export function validateNewMimpi(title: string): void {
  if (!title || title.trim().length < 3) {
    throw new Error("Judul Mimpi minimal 3 karakter");
  }
  if (title.length > 200) {
    throw new Error("Judul Mimpi maksimal 200 karakter");
  }
}
