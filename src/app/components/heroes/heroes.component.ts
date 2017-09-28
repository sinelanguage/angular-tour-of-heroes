import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from '../../models/hero'
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
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
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  add(name: string): void {
    name = name.trim()
    if ( !name ) { return; }
    this.heroService.create(name)
      .then(
        hero => {
          this.heroes.push(hero)
          this.selectedHero = null
        }
      )
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(
        () => {
          this.heroes = this.heroes.filter(h => h !== hero)
          if (this.selectedHero === hero) {this.selectedHero = null}
        }
      )
  }

  constructor(
    private heroService: HeroService,
    private router: Router
  ){ }
}
