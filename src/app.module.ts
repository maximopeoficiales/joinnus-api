import { Module } from '@nestjs/common';
import { RouterApiModule } from './routers/api.router.module';

@Module({
  imports: [RouterApiModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
