import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail, IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  cpf: string;

  @ApiProperty({ enum: Role })
  @IsEnum(Role)
  role: Role;

  @ApiProperty({ required: false })
  avatarUrl?: string;

  @ApiProperty({ required: false, default: true })
  isActive?: boolean;
}
