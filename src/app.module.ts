import { Module } from '@nestjs/common';
import { RouterApiModule } from './routers/api.router.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [RouterApiModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
