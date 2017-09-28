import { InMemoryDbService } from 'angular-in-memory-web-api'
import { HEROES } from '../data/heroes'

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {HEROES}
  }
}
