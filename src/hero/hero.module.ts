import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';
import { ClientsModule } from '@nestjs/microservices';
import { heroClientOptions } from './hero-client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        ...heroClientOptions,
      },
    ]),
  ],
  controllers: [HeroController],
  providers: [],
})
export class HeroModule {}
