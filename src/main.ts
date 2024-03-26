import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import path from "node:path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const path = require('node:path');
  app.useStaticAssets(path.join(__dirname, '..', 'public'), {prefix: '/public'});

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true,
  })
  await app.listen(3000);
}
bootstrap();