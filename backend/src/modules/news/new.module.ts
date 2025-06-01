import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenStrategy } from 'src/common/strategies/accessToken.strategy';
import { New } from 'src/entities/new.entity';
import { NewController } from './new.controller';
import { NewService } from './new.service';

@Module({
  imports: [TypeOrmModule.forFeature([New])],
  providers: [NewService, AccessTokenStrategy, JwtService],
  controllers: [NewController],
})
export class NewModule {}
