import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms' // <-- add to imports array
import { RouterModule } from '@angular/router'


import { HeroService } from './services/hero.service'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'

import { Routes } from './routes/routes'

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
    RouterModule.forRoot(Routes),
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
