import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokeapiService } from '../shared/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  valueInput;
  pokemonsAll = [];
  constructor(public pokeApi: PokeapiService) {}

  ngOnInit(): void {
    this.pokeApi
      .getAllPokemons()
      .pipe(map((resp) => resp.results))
      .subscribe((resp) => {
        this.pokemonsAll.push(...this.getIdPokemons(resp));
      });
  }

  filterValues(value){
    console.log(this.pokemonsAll.filter((pokemon)=>pokemon.name.includes(value)));
  }

  getIdPokemons(pokemons: { name: string; url: string }[]) {
    return pokemons.map((pokemon) => {
      const words = pokemon.url.split('/');
      return { ...pokemon, id: words[words.length - 2] };
    });
  }
}
