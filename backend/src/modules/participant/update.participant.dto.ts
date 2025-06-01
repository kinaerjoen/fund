import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateParticipantDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsString()
  position: string;

  @IsOptional()
  @IsString()
  description: string;
}
