import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pdf } from 'src/entities/pdf.entity';
import { Repository } from 'typeorm';
import { deleteFiles } from '../media/media.controller';
import { CreatePdfDto } from './create.pdf.dto';

@Injectable()
export class PdfService {
  constructor(
    @InjectRepository(Pdf)
    private pdfRepository: Repository<Pdf>,
  ) {}

  async getPdfs() {
    return await this.pdfRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async createPdf(createPdfDto: CreatePdfDto) {
    return await this.pdfRepository.save(
      this.pdfRepository.create(createPdfDto),
    );
  }

  async deletePdf(pdfId: string) {
    const pdfItem = await this.pdfRepository.findOne({
      where: { id: pdfId },
    });

    deleteFiles([pdfItem.pdf]);

    return await this.pdfRepository.delete(pdfId);
  }
}
