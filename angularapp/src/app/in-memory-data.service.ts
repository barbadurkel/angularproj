import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [

      { id : 11, name : 'Mr. PoopyButthole' },
      { id : 12, name : 'Rick Sanchez' },
      { id : 13, name : 'Dr. Xenon Bloom' },
      { id : 14, name : 'Fart' },
      { id : 15, name : 'Jerry Smith' },
      { id : 16, name : 'Scary Terry' },
      { id : 17, name : 'Abradolf Lincler' },
      { id : 18, name : 'Glip Glop' }
    ];

  return {heroes};
  }
  
  genId(heroes: Hero[]): number{
      return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }


}
