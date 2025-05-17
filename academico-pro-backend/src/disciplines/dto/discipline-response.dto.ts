import { ApiProperty } from '@nestjs/swagger';

export class DisciplineResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  workload: number;

  @ApiProperty()
  department: string;

  @ApiProperty({ required: false })
  syllabus?: string;

  @ApiProperty({ required: false })
  courseId?: string;

  @ApiProperty({ required: false })
  professorId?: string;
}
