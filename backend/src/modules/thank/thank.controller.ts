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
import { CreateThankDto } from './create.thank.dto';
import { ThankService } from './thank.service';

@Controller('thanks')
export class ThankController {
  constructor(private thankService: ThankService) {}

  @Get()
  async getThanks() {
    return await this.thankService.getThanks();
  }

  @Post()
  @UseGuards(AccessTokenGuard)
  async createThank(@Body() createThankDto: CreateThankDto) {
    return await this.thankService.createThank(createThankDto);
  }

  @Delete(':thankId')
  @UseGuards(AccessTokenGuard)
  async deleteThank(@Param('thankId') thankId: string) {
    return await this.thankService.deleteThank(thankId);
  }
}
