import { StudentProfile } from '@prisma/client';

import { DisciplineResponseDto } from '../../disciplines/dto/discipline-response.dto';

export class CourseResponseDto {
  id: string;
  name: string;
  code: string;
  description?: string | null;
  createdAt: Date;
  students?: StudentProfile[];
  disciplines?: DisciplineResponseDto[];
}
