import { StudentProfile } from '@prisma/client';

import { Discipline } from '../../disciplines/entity/discipline.entity';

export class Course {
  id: string;
  name: string;
  code: string;
  description?: string;
  createdAt: Date;
  students?: StudentProfile[];
  disciplines?: Discipline[];
}
