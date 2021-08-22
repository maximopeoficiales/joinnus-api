import { Module } from '@nestjs/common';
import { JoinnusService } from './joinnus.service';
import { JoinnusController } from './joinnus.controller';
import { JoinnusSearch } from './JoinnusSearch';

@Module({
  controllers: [JoinnusController],
  providers: [JoinnusService, JoinnusSearch]
})
export class JoinnusModule { }
