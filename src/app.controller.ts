import { Controller, Get, OnModuleInit, Param } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { HeroService } from './hero/interfaces/hero-service.interface';
import { heroClientOptions } from './hero/hero-client.options';
import { Hero } from './hero/interfaces/hero.interface';

@Controller()
export class AppController implements OnModuleInit {
  @Client(heroClientOptions)
  private readonly client: ClientGrpc;

  private heroesService: HeroService;

  onModuleInit() {
    this.heroesService = this.client.getService<HeroService>('HeroesService');
  }

  @Get('heroesById/:id')
  findById(@Param() params): Promise<Hero> {
    return this.heroesService.FindOne({ id: params.id });
  }
}
