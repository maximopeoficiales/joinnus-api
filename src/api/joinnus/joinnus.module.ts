import { Module } from '@nestjs/common';
import { JoinnusService } from './joinnus.service';
import { JoinnusController } from './joinnus.controller';

@Module({
  controllers: [JoinnusController],
  providers: [JoinnusService]
})
export class JoinnusModule {}
