import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenStrategy } from 'src/common/strategies/accessToken.strategy';
import { Pdf } from 'src/entities/pdf.entity';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pdf])],
  providers: [PdfService, AccessTokenStrategy, JwtService],
  controllers: [PdfController],
})
export class PdfModule {}
