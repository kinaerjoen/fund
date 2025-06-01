import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenStrategy } from 'src/common/strategies/accessToken.strategy';
import { Report } from 'src/entities/report.entity';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
  providers: [ReportService, AccessTokenStrategy, JwtService],
  controllers: [ReportController],
})
export class ReportModule {}
