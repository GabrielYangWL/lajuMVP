import type { Blueprint, Priority, TimelineEntry } from "@prisma/client";

export type { Blueprint, Priority, TimelineEntry };

export interface UpdateBlueprintInput {
  vision?: string;
  mission?: string;
}

export interface BlueprintWithRelations extends Blueprint {
  priorities: Priority[];
  timelineEntries: TimelineEntry[];
}
