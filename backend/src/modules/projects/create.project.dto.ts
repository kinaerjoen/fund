import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  targetAmount: string;

  @IsNotEmpty()
  @IsString()
  currentAmount: string;

  @IsOptional()
  @IsArray()
  medias: string[];
}
