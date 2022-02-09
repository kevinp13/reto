import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonsGruopResponse, PokemonDataResponse } from '../models/pokemon.model'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  pokemonsAll= [];
  url= 'https://pokeapi.co/api/v2/'
  constructor(private http: HttpClient) {
    this.getAllPokemons()
      .pipe(map((resp) => resp.results))
      .subscribe((resp) => {
        this.pokemonsAll.push(...this.getIdPokemons(resp));
        console.log(this.pokemonsAll);
      });
  }

  getPokemonsAll(){
    return this.pokemonsAll;
  }
  getIdPokemons(pokemons: { name: string; url: string }[]) {
    return pokemons.map((pokemon) => {
      const words = pokemon.url.split('/');
      return { ...pokemon, id: words[words.length - 2] };
    });
  }

  getPokemon(name:string){
    return this.http.get<PokemonDataResponse>(`${this.url}pokemon/${name}` );
  }

  getPokemons(limit: number, offset: number){
    return this.http.get<PokemonsGruopResponse>(`${this.url}pokemon?limit=${limit}&offset=${offset}` );
  }
  getAllPokemons(){
    return this.getPokemons(1400,0);
  }
}
