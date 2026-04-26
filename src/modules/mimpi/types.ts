import type {
  Mimpi,
  Task,
  CurriculumItem,
  ProgressLog,
  MimpiStatus,
} from "@prisma/client";

export type { MimpiStatus };

export interface CreateMimpiInput {
  title: string;
  objective?: string;
  targetDate?: Date;
}

export interface UpdateMimpiInput {
  title?: string;
  objective?: string;
  targetDate?: Date;
}

export interface CreateTaskInput {
  mimpiId: string;
  curriculumItemId?: string;
  title: string;
  description?: string;
  dueDate?: Date;
  idempotencyKey: string;
}

export interface CompleteTaskInput {
  taskId: string;
  mimpiId: string;
  idempotencyKey: string;
}

export interface MimpiWithRelations extends Mimpi {
  curriculumItems: CurriculumItem[];
  tasks: Task[];
  progressLogs: ProgressLog[];
}
