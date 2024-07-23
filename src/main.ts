import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //whitelist: true, // Ignorar datos que no esten en los DTO
      //forbidNonWhitelisted: true, // Lanzar error si existen datos prohibidos
      //disableErrorMessages: true, // Desabilitar mensajes de error (producción)
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: false,
      skipMissingProperties: false, // Habilita la validación parcial
    }),
  );
  await app.listen(3005);
}
bootstrap();
