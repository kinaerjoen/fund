import { Controller, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from './common/guards/accessToken.guard';

@Controller()
@UseGuards(AccessTokenGuard)
export class AppController {}
