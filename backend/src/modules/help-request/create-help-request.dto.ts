import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { HelpRequestStatus } from '../../entities/help-request.entity';

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

export class UpdateHelpRequestStatusDto {
  @IsNotEmpty()
  @IsEnum(HelpRequestStatus)
  status: HelpRequestStatus;

  @IsOptional()
  @IsString()
  assignedTo?: string;

  @IsOptional()
  @IsString()
  statusComment?: string;
} 