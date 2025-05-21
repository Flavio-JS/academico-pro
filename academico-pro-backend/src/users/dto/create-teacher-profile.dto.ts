import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeacherProfileDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  department: string;
}
