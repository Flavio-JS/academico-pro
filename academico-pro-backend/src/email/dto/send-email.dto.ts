import { IsOptional, IsString } from 'class-validator';

export class SendEmailDto {
  @IsString()
  to: string;

  @IsString()
  subject: string;

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsString()
  html?: string;

  @IsOptional()
  template?: string;

  @IsOptional()
  context?: Record<string, any>;
}
