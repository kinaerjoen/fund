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
import { CreateReportDto } from './create.report.dto';
import { ReportService } from './report.service';

@Controller('reports')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get()
  async getReports() {
    return await this.reportService.getReports();
  }

  @Get(':reportId')
  async getReport(@Param('reportId') reportId: string) {
    return await this.reportService.getReport(reportId);
  }

  @Post()
  @UseGuards(AccessTokenGuard)
  async createReport(@Body() createReportDto: CreateReportDto) {
    return await this.reportService.createReport(createReportDto);
  }

  @Delete(':reportId')
  @UseGuards(AccessTokenGuard)
  async deleteReport(@Param('reportId') reportId: string) {
    return await this.reportService.deleteReport(reportId);
  }
}
