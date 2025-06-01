import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenStrategy } from 'src/common/strategies/accessToken.strategy';
import { Thank } from 'src/entities/thank.entity';
import { ThankController } from './thank.controller';
import { ThankService } from './thank.service';

@Module({
  imports: [TypeOrmModule.forFeature([Thank])],
  providers: [ThankService, AccessTokenStrategy, JwtService],
  controllers: [ThankController],
})
export class ThankModule {}
