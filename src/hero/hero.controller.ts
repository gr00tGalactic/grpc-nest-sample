import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Hero } from './interfaces/hero.interface';
import { HeroByIdRequestParams } from './interfaces/hero-by-id.interface';

@Controller()
export class HeroController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroByIdRequestParams): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
