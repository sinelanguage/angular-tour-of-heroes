import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes'
}

// You can also make a class with a constructor and TS

export class AppCtorComponent {
  title: string
  hero: string

  constructor() {
    this.title = "Tour of Heroes"
    this.hero = "Windstorm"
  }
}
