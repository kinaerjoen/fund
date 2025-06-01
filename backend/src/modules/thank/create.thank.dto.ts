import { IsNotEmpty, IsString } from 'class-validator';

export class CreateThankDto {
  @IsNotEmpty()
  @IsString()
  image: string;
}
