import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Request } from '@nestjs/common';
import { HelpRequestService } from './help-request.service';
import { CreateHelpRequestDto, UpdateHelpRequestStatusDto } from './create-help-request.dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('help-requests')
export class HelpRequestController {
  constructor(private readonly helpRequestService: HelpRequestService) {}

  @Post()
  async create(@Body() createHelpRequestDto: CreateHelpRequestDto) {
    return this.helpRequestService.create(createHelpRequestDto);
  }

  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    return this.helpRequestService.findAll();
  }

  @UseGuards(AccessTokenGuard)
  @Put(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateHelpRequestStatusDto,
    @Request() req: any,
  ) {
    return this.helpRequestService.updateStatus(id, updateStatusDto, req.user?.username || 'admin');
  }

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.helpRequestService.delete(id);
    return { success: true };
  }
} 