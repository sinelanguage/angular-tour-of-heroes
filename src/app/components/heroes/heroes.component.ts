import { Component, OnInit } from '@angular/core';

import { Hero } from './models/hero'
import { HeroService } from '' // './services/hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes()
  }

  title = 'Tour of Heroes'
  anotherHero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  selectedHero: Hero
  heroes: Hero[]
  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  constructor(private heroService: HeroService){

  }
}
