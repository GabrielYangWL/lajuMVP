import { describe, it, expect } from "vitest";
import { canTransition, validateNewMimpi, MAX_ACTIVE_MIMPI } from "./mimpi";

describe("Mimpi state machine", () => {
  it("allows DRAFT → ACTIVE", () => {
    expect(canTransition("DRAFT", "ACTIVE")).toBe(true);
  });

  it("allows ACTIVE → PAUSED", () => {
    expect(canTransition("ACTIVE", "PAUSED")).toBe(true);
  });

  it("allows ACTIVE → COMPLETED", () => {
    expect(canTransition("ACTIVE", "COMPLETED")).toBe(true);
  });

  it("disallows ARCHIVED → ACTIVE", () => {
    expect(canTransition("ARCHIVED", "ACTIVE")).toBe(false);
  });

  it("disallows DRAFT → COMPLETED (must go through ACTIVE)", () => {
    expect(canTransition("DRAFT", "COMPLETED")).toBe(false);
  });

  it("disallows COMPLETED → ACTIVE", () => {
    expect(canTransition("COMPLETED", "ACTIVE")).toBe(false);
  });
});

describe("validateNewMimpi", () => {
  it("throws if title is too short", () => {
    expect(() => validateNewMimpi("ab")).toThrow("minimal 3 karakter");
  });

  it("throws if title is empty", () => {
    expect(() => validateNewMimpi("")).toThrow();
  });

  it("throws if title exceeds 200 characters", () => {
    expect(() => validateNewMimpi("a".repeat(201))).toThrow(
      "maksimal 200 karakter"
    );
  });

  it("accepts a valid title", () => {
    expect(() => validateNewMimpi("Belajar TypeScript")).not.toThrow();
  });

  it("accepts a title of exactly 3 characters", () => {
    expect(() => validateNewMimpi("abc")).not.toThrow();
  });
});

describe("MAX_ACTIVE_MIMPI", () => {
  it("is 5", () => {
    expect(MAX_ACTIVE_MIMPI).toBe(5);
  });
});
