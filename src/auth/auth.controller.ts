import { User } from './entity/register.entity';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('auth')
@ApiTags('用户')
export class AuthController {
  constructor(
    @InjectRepository(User)
    private readonly userModel: Repository<User>,
  ) {}

  @Post('register')
  @ApiOperation({
    summary: '注册',
  })
  async register(@Body() dto: RegisterDto) {
    const user = await this.userModel.insert(dto);
    return user;
  }
}
