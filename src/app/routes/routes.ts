import { HeroesComponent } from '../components/heroes/heroes.component'
import { DashboardComponent } from '../components/dashboard/dashboard.component'
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component'

export const Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]
