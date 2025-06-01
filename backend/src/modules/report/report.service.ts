import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from 'src/entities/report.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './create.report.dto';
import { deleteFiles } from '../media/media.controller';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}

  async getReports() {
    return await this.reportRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async getReport(reportId: string) {
    return await this.reportRepository.findOne({ where: { id: reportId } });
  }

  async createReport(createReportDto: CreateReportDto) {
    return await this.reportRepository.save(
      this.reportRepository.create(createReportDto),
    );
  }

  async deleteReport(reportId: string) {
    const reportItem = await this.reportRepository.findOne({
      where: { id: reportId },
    });

    deleteFiles(reportItem.medias);

    return await this.reportRepository.delete(reportId);
  }
}
