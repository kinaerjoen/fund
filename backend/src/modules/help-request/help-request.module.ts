import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenStrategy } from 'src/common/strategies/accessToken.strategy';
import { HelpRequest } from 'src/entities/help-request.entity';
import { HelpRequestController } from './help-request.controller';
import { HelpRequestService } from './help-request.service';

@Module({
  imports: [TypeOrmModule.forFeature([HelpRequest])],
  providers: [HelpRequestService, AccessTokenStrategy, JwtService],
  controllers: [HelpRequestController],
})
export class HelpRequestModule {} 