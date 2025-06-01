import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { CreatePdfDto } from './create.pdf.dto';
import { PdfService } from './pdf.service';

@Controller('pdfs')
export class PdfController {
  constructor(private pdfService: PdfService) {}

  @Get()
  async getPdfs() {
    return await this.pdfService.getPdfs();
  }

  @Post()
  @UseGuards(AccessTokenGuard)
  async createPdf(@Body() createPdfDto: CreatePdfDto) {
    return await this.pdfService.createPdf(createPdfDto);
  }

  @Delete(':pdfId')
  @UseGuards(AccessTokenGuard)
  async deletePdf(@Param('pdfId') pdfId: string) {
    return await this.pdfService.deletePdf(pdfId);
  }
}
