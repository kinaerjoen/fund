import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { New } from 'src/entities/new.entity';
import { Repository } from 'typeorm';
import { CreateNewDto } from './create.new.dto';
import { deleteFiles } from '../media/media.controller';

@Injectable()
export class NewService {
  constructor(
    @InjectRepository(New)
    private newRepository: Repository<New>,
  ) {}

  async getNews() {
    return await this.newRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async getNew(newId: string) {
    return await this.newRepository.findOne({ where: { id: newId } });
  }

  async createNew(createNewDto: CreateNewDto) {
    return await this.newRepository.save(
      this.newRepository.create(createNewDto),
    );
  }

  async deleteNew(newId: string) {
    const newItem = await this.newRepository.findOne({ where: { id: newId } });

    deleteFiles([...newItem.medias, newItem.mainPicture]);

    return await this.newRepository.delete(newId);
  }
}
