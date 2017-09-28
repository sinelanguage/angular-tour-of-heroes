import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms' // <-- add to imports array
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './routes.module'


import { HeroService } from './services/hero.service'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- as you can see
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
