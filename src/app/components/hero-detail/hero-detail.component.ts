import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'
import { Hero } from '../../models/hero'
import { HeroService } from '../../services/hero.service'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero

    goBack():void {
      this.location.back();
    }

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ){}

    ngOnInit(): void {
      this.route.paramMap.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      // The hero id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.
      .subscribe(hero => this.hero = hero)
    }
}
