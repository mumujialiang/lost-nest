import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: '用户名',
    example: 'name',
  })
  username: string;

  @ApiProperty({
    description: '密码',
    example: 'pwd',
  })
  password: string;
}
