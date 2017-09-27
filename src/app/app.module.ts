import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms' // <-- add to imports array

import { HeroService } from './services/hero.service'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'
import { HeroesComponent } from './components/heroes/heroes.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- as you can see
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
