import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { IUserIdAndLogin } from 'src/common/types/interfaces';
import { config } from 'src/config/app.config';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './login.user.dto';

const {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_TOKEN_EXPIRES_HOURS,
  REFRESH_TOKEN_EXPIRES_DAYS,
} = config;

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);

    return await this.generateToken(user);
  }

  async create(userDto: { login: string; password: string }) {
    const hashPassword = await bcrypt.hash(userDto.password, 5);

    await this.userRepository.save({ ...userDto, password: hashPassword });
  }

  private async generateToken(user: User | IUserIdAndLogin) {
    const payload = { login: user.login, id: user.id };

    const [accessToken, refreshToken] = (
      await Promise.all([
        this.jwtService.signAsync(payload, {
          secret: JWT_ACCESS_SECRET,
          expiresIn: ACCESS_TOKEN_EXPIRES_HOURS + 'h',
        }),
        this.jwtService.signAsync(payload, {
          secret: JWT_REFRESH_SECRET,
          expiresIn: REFRESH_TOKEN_EXPIRES_DAYS + 'd',
        }),
      ])
    ).map((token: string) => 'Bearer ' + token);

    return {
      accessToken,
      refreshToken,
    };
  }

  private async validateUser(userDto: LoginUserDto) {
    const user = await this.userRepository.findOneBy({ login: userDto.login });

    if (!user) {
      throw new HttpException('No such user', HttpStatus.BAD_REQUEST);
    }

    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({
      message: 'Wrong login or password',
    });
  }

  async refreshTokens(userInfo: IUserIdAndLogin) {
    const tokens = await this.generateToken(userInfo);

    return tokens;
  }
}
