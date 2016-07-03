import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
})

export class HeroesComponent implements OnInit { 
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero) { this.selectedHero = hero; }

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  goToDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
