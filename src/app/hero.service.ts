import { Injectable } from '@angular/core';
import { Hero } from './hero';   //객체 유형 import
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
