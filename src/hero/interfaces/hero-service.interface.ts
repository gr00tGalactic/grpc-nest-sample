import { Hero } from './hero.interface';
import { HeroByIdRequestParams } from './hero-by-id.interface';

/**
 * Интерфейс методов микросервиса Героя
 */
export interface HeroService {
  FindOne(request: HeroByIdRequestParams): Promise<Hero>;
}
