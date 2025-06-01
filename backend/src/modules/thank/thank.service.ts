import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Thank } from 'src/entities/thank.entity';
import { Repository } from 'typeorm';
import { deleteFiles } from '../media/media.controller';
import { CreateThankDto } from './create.thank.dto';

@Injectable()
export class ThankService {
  constructor(
    @InjectRepository(Thank)
    private thankRepository: Repository<Thank>,
  ) {}

  async getThanks() {
    return await this.thankRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async createThank(createThankDto: CreateThankDto) {
    return await this.thankRepository.save(
      this.thankRepository.create(createThankDto),
    );
  }

  async deleteThank(thankId: string) {
    const thankItem = await this.thankRepository.findOne({
      where: { id: thankId },
    });

    deleteFiles([thankItem.image]);

    return await this.thankRepository.delete(thankId);
  }
}
