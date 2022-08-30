import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { heroClientOptions } from './hero/hero.client.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(heroClientOptions);
  await app.startAllMicroservices();

  await app.listen(3001);
}
bootstrap();
