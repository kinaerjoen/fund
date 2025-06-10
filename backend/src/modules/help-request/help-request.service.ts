import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHelpRequestDto, UpdateHelpRequestStatusDto } from './create-help-request.dto';
import { HelpRequest, HelpRequestStatus } from '../../entities/help-request.entity';

@Injectable()
export class HelpRequestService {
  constructor(
    @InjectRepository(HelpRequest)
    private helpRequestRepository: Repository<HelpRequest>,
  ) {}

  async create(createHelpRequestDto: CreateHelpRequestDto): Promise<HelpRequest> {
    const helpRequest = this.helpRequestRepository.create({
      ...createHelpRequestDto,
      status: HelpRequestStatus.NEW
    });
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

  async updateStatus(
    id: string,
    updateStatusDto: UpdateHelpRequestStatusDto,
    updatedBy: string
  ): Promise<HelpRequest> {
    const helpRequest = await this.findOne(id);
    if (!helpRequest) {
      return null;
    }

    helpRequest.status = updateStatusDto.status;
    helpRequest.assignedTo = updateStatusDto.assignedTo;
    helpRequest.statusComment = updateStatusDto.statusComment;
    helpRequest.statusUpdatedAt = new Date();

    if (updateStatusDto.status === HelpRequestStatus.COMPLETED) {
      helpRequest.isProcessed = true;
      helpRequest.processedAt = new Date();
      helpRequest.processedBy = updatedBy;
    }

    return this.helpRequestRepository.save(helpRequest);
  }

  async delete(id: string): Promise<void> {
    await this.helpRequestRepository.delete(id);
  }
} 