import { User } from './entity/register.entity';
import {
  BadRequestException,
  Body,
  Controller,
  Injectable,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Repository } from 'typeorm';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('用户')
@Injectable()
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private readonly userModel: Repository<User>,
  ) {}

  @Post('register')
  @ApiOperation({
    summary: '注册',
  })
  async register(@Body() { username, password }: RegisterDto) {
    const salt = genSaltSync(10);
    const user = await this.userModel.insert({
      username,
      password: hashSync(password, salt),
    });
    return user;
  }

  @Post('login')
  @ApiOperation({
    summary: '登录',
  })
  async login(@Body() { username, password }: LoginDto) {
    const user = await this.userModel.findOne(
      {
        username,
      },
      {
        select: ['username', 'password'],
      },
    );

    if (user && password && compareSync(password, user.password)) {
      return {
        token: this.jwtService.sign({
          sub: username,
          exp: Math.floor(new Date().getTime() / 1000) + 60 * 60 * 24 * 30,
        }),
      };
    }
    throw new BadRequestException('账号或密码不正确');
  }
}
