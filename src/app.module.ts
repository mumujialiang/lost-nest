import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entity/user.entity';
import { CommonModule } from './common/common.module';
import { PostingModule } from './posting/posting.module';
import { Posting } from './posting/entity/posting.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.227.129',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, Posting],
      synchronize: true,
    }),
    AuthModule,
    CommonModule,
    ConfigModule.forRoot(),
    PostingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
