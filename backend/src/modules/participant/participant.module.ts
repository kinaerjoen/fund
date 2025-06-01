import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenStrategy } from 'src/common/strategies/accessToken.strategy';
import { Participant } from 'src/entities/participant.entity';
import { ParticipantController } from './participant.controller';
import { ParticipantService } from './participant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  providers: [ParticipantService, AccessTokenStrategy, JwtService],
  controllers: [ParticipantController],
})
export class ParticipantModule {}
