import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// export the component class so you can import it elsewhere
export class HeroesComponent implements OnInit {
  heroes : Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // call ngOnInit() AFTER the getHeroes() definition. obvious, right?
  ngOnInit() {
  this.getHeroes();
  }

  add(name: string): void{
    name = name.trim();
    if(!name){ return;}
    this.heroService.addHero( { name } as unknown as Hero).subscribe(hero => { this.heroes.push(hero);
    });
  }
  delete(hero:Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();  }
 

}
