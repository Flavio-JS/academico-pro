import { User as PrismaUser } from '@prisma/client';

export type PrismaUserType = PrismaUser & {
  studentProfile?: {
    id: string;
    enrollment: string;
    courseId: string;
    period: number;
  } | null;
  teacherProfile?: {
    id: string;
    department: string;
  } | null;
};
