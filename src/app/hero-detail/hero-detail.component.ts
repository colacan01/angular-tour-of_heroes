import { Component, OnInit, Input  } from '@angular/core';
import { Hero } from '../hero';   //객체 유형 import

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  @Input() hero?: Hero;   //@input() 유형으로 선언한 변수를 전달 받음

}
