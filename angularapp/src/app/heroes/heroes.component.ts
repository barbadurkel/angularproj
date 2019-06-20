import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// export the component class so you can import it elsewhere
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

hero:Hero = {
  id : 1,
  name : 'Magneto'
};


}
