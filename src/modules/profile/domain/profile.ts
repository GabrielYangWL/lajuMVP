export function computeCompletenessScore(profile: {
  displayName: string | null;
  bio: string | null;
  city: string | null;
  birthYear: number | null;
}): number {
  const fields = [
    profile.displayName,
    profile.bio,
    profile.city,
    profile.birthYear,
  ];
  const filled = fields.filter(Boolean).length;
  return Math.round((filled / fields.length) * 100);
}
