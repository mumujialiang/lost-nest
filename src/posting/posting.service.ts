import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Posting } from './entity/posting.entity';

@Injectable()
export class PostingService extends TypeOrmCrudService<Posting> {
  constructor(@InjectRepository(Posting) repo) {
    super(repo);
  }
}
