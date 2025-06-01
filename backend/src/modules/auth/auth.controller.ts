import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Response,
  UseGuards,
} from '@nestjs/common';
import { Response as Res } from 'express';
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';
import { IExtendedRequestWithUser } from 'src/common/types/interfaces';
import { config } from 'src/config/app.config';
import { getRefreshExpiresIn } from 'src/helpers/auth';
import { LoginUserDto } from 'src/modules/auth/login.user.dto';
import { AuthService } from './auth.service';

const { DOMAIN, REFRESH_TOKEN_EXPIRES_DAYS_IN_MILLISECONDS } = config;

@Controller('admin/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() userDto: LoginUserDto,
    @Response({ passthrough: true }) res: Res,
  ) {
    const { accessToken, refreshToken } = await this.authService.login(userDto);

    res
      .cookie('refreshToken', refreshToken, {
        secure: true,
        httpOnly: true,
        maxAge: REFRESH_TOKEN_EXPIRES_DAYS_IN_MILLISECONDS,
        expires: getRefreshExpiresIn(),
        sameSite: 'lax',
        domain: DOMAIN,
        path: '/',
      })
      .send(accessToken)
      .end();
  }

  @Post('lkuhdfl7if45gflgsdj')
  async create(@Body() userDto: any) {
    await this.authService.create(userDto);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refreshTokens(
    @Req() req: IExtendedRequestWithUser,
    @Response() res: Res,
  ) {
    const { accessToken, refreshToken } = await this.authService.refreshTokens(
      req.user,
    );

    res
      .cookie('refreshToken', refreshToken, {
        secure: true,
        httpOnly: true,
        maxAge: REFRESH_TOKEN_EXPIRES_DAYS_IN_MILLISECONDS,
        expires: getRefreshExpiresIn(),
        sameSite: 'lax',
        domain: DOMAIN,
        path: '/',
      })
      .send(accessToken)
      .end();
  }

  @Get('sign-out')
  async signOut(@Response() res: Res) {
    res
      .clearCookie('refreshToken', {
        secure: true,
        httpOnly: true,
        sameSite: 'lax',
        domain: DOMAIN,
        path: '/',
      })
      .send()
      .end();
  }
}
