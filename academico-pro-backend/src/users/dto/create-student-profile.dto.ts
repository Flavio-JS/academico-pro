import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateStudentProfileDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  enrollment: string;

  @IsString()
  @IsNotEmpty()
  courseId: string;

  @IsInt()
  @Min(1)
  period: number;
}
