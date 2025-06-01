import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePdfDto {
  @IsNotEmpty()
  @IsString()
  pdf: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  size: string;
}
