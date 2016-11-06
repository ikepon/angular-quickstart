import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  // The gotoDetail method navigates in two steps:
  // 1. Set a route link parameters array
  // 2. Pass the array to the router's navigate method
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
