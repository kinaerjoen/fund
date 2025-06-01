import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateHelpRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  comment: string;
} 