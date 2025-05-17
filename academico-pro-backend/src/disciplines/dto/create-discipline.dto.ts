import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateDisciplineDto {
  @IsString()
  code: string;

  @IsString()
  name: string;

  @IsInt()
  workload: number;

  @IsString()
  department: string;

  @IsString()
  @IsOptional()
  syllabus?: string;

  @IsString()
  @IsOptional()
  courseId?: string;

  @IsString()
  @IsOptional()
  professorId?: string;
}
