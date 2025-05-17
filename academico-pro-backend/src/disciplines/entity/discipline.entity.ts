import { Course } from '@prisma/client';
import { User } from '@prisma/client';

export class Discipline {
  id: string;
  code: string;
  name: string;
  workload: number;
  department: string;
  syllabus?: string;
  courseId?: string;
  course?: Course;
  professorId?: string;
  professor?: User;
}
