import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Participant } from 'src/entities/participant.entity';
import { Repository } from 'typeorm';
import { deleteFiles } from '../media/media.controller';
import { CreateParticipantDto } from './create.participant.dto';
import { UpdateParticipantDto } from './update.participant.dto';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
  ) {}

  async getParticipants() {
    return await this.participantRepository.find({
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async createParticipant(createParticipantDto: CreateParticipantDto) {
    return await this.participantRepository.save(
      this.participantRepository.create(createParticipantDto),
    );
  }

  async updateParticipant(updateParticipantDto: UpdateParticipantDto) {
    return await this.participantRepository.save(updateParticipantDto);
  }

  async deleteParticipant(participantId: string) {
    const participantItem = await this.participantRepository.findOne({
      where: { id: participantId },
    });

    deleteFiles([participantItem.image]);

    return await this.participantRepository.delete(participantId);
  }
}
