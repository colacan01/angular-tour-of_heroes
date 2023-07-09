import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';   //객체 유형 import
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  selectedHero?: Hero;          //selectedHero 변수 유형을 설정하고, nullable--> ?
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {   
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {  //함수가 호출되면 Hero 변수형의 hero가 설정되고 selectedHero 변수에 전달된다
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };

}
