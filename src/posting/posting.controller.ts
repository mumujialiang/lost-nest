import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Posting } from './entity/posting.entity';
import { PostingService } from './posting.service';

@Crud({
  model: {
    type: Posting,
  },
})
@ApiTags('帖子')
@Controller('posting')
export class PostingController implements CrudController<Posting> {
  constructor(public service: PostingService) {}
}
