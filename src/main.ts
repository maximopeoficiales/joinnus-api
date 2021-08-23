import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { optionsCors, optionsCustomSwagger, optionsSwagger } from './config/config.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // pipe validador global con ValidationPipe de nest js
  app.useGlobalPipes(new ValidationPipe());
  // versionamiento
  app.enableVersioning()
  // cors global
  app.enableCors(optionsCors);

  // config swagger
  const document = SwaggerModule.createDocument(app, optionsSwagger);
  SwaggerModule.setup("api/docs", app, document, optionsCustomSwagger);


  await app.listen(AppModule.port);
}
bootstrap();
