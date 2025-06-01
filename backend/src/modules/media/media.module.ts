import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenStrategy } from 'src/common/strategies/accessToken.strategy';
import { User } from 'src/entities/user.entity';
import { MediaController } from './media.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AccessTokenStrategy, JwtService],
  controllers: [MediaController],
})
export class MediaModule {}
