import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { CreateParticipantDto } from './create.participant.dto';
import { ParticipantService } from './participant.service';
import { UpdateParticipantDto } from './update.participant.dto';

@Controller('participants')
export class ParticipantController {
  constructor(private participantService: ParticipantService) {}

  @Get()
  async getParticipants() {
    return await this.participantService.getParticipants();
  }

  @Post()
  @UseGuards(AccessTokenGuard)
  async createParticipant(@Body() createParticipantDto: CreateParticipantDto) {
    return await this.participantService.createParticipant(
      createParticipantDto,
    );
  }

  @Put()
  @UseGuards(AccessTokenGuard)
  async updateParticipant(@Body() updateParticipantDto: UpdateParticipantDto) {
    return await this.participantService.updateParticipant(
      updateParticipantDto,
    );
  }

  @Delete(':participantId')
  @UseGuards(AccessTokenGuard)
  async deleteParticipant(@Param('participantId') participantId: string) {
    return await this.participantService.deleteParticipant(participantId);
  }
}
