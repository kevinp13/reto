import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { PokeapiService } from './shared/services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reto';
  pokemonsAll = [];
  constructor(public pokeApi: PokeapiService) {}

  ngOnInit(): void {
  }



}
