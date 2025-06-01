import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHelpRequestDto } from './create-help-request.dto';
import { HelpRequest } from '../../entities/help-request.entity';

@Injectable()
export class HelpRequestService {
  constructor(
    @InjectRepository(HelpRequest)
    private helpRequestRepository: Repository<HelpRequest>,
  ) {}

  async create(createHelpRequestDto: CreateHelpRequestDto): Promise<HelpRequest> {
    const helpRequest = this.helpRequestRepository.create(createHelpRequestDto);
    return this.helpRequestRepository.save(helpRequest);
  }

  async findAll(): Promise<HelpRequest[]> {
    return this.helpRequestRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<HelpRequest> {
    return this.helpRequestRepository.findOneBy({ id });
  }

  async markAsProcessed(id: string, processedBy: string): Promise<HelpRequest> {
    const helpRequest = await this.findOne(id);
    if (!helpRequest) {
      return null;
    }
    helpRequest.isProcessed = true;
    helpRequest.processedAt = new Date();
    helpRequest.processedBy = processedBy;
    return this.helpRequestRepository.save(helpRequest);
  }

  async delete(id: string): Promise<void> {
    await this.helpRequestRepository.delete(id);
  }
} 