import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNewDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  mainPicture: string;

  @IsOptional()
  @IsArray()
  medias: string[];
}
