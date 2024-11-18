import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log'],
  });
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: 'https://app-e-paper.vercel.app/documents',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    exposedHeaders: 'Content-Length',
  });
  const PORT = 3001;
  await app.listen(PORT);

  console.log(`NestJS rodando na porta ${PORT}`);
}

bootstrap();
