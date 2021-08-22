import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // pipe validador global con ValidationPipe de nest js
  app.useGlobalPipes(new ValidationPipe());
  // versionamiento
  app.enableVersioning()
  // cors global
  app.enableCors({
    allowedHeaders: "*",
    origin: "*"
  });
  // config swagger
  const options = new DocumentBuilder()
    .setTitle("API JOINNUS UNOFFICIAL")
    .setDescription("Esta api esta obtiene los datos el sitio https://www.joinnus.com/")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api/docs", app, document, {
    explorer: true,
    swaggerOptions: { filter: true, showRequestDuration: true },
  });
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
