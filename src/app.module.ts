import { Module } from '@nestjs/common';
import { RouterApiModule } from './routers/api.router.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Config } from './config/config.key';

@Module({
  imports: [ConfigModule, RouterApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Config.PORT);
  }

}
