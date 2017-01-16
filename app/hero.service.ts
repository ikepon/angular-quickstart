import { Injectable } from '@angular/core';

import { Hero } from './hero';
// heroes のモックを読み込む
import  { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
