import type { Profile, ProfileExperience, ProfileSkill, ProfileEducation } from "@prisma/client";

export type { Profile, ProfileExperience, ProfileSkill, ProfileEducation };

export interface UpdateProfileInput {
  displayName?: string;
  bio?: string;
  city?: string;
  birthYear?: number;
}

export interface ProfileWithRelations extends Profile {
  experiences: ProfileExperience[];
  skills: ProfileSkill[];
  educations: ProfileEducation[];
}
