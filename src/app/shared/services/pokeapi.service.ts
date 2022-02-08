import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

interface ResponsePokemons {
  count: number;
  next: string;
  previous: string;
  results: {name: string, url: string}[];
}
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  url= 'https://pokeapi.co/api/v2/'
  constructor(private http: HttpClient) { }

  getPokemon(name:string){
    return this.http.get(`${this.url}pokemon/${name}` );
  }

  getPokemons(limit: number, offset: number){
    return this.http.get<ResponsePokemons>(`${this.url}pokemon?limit=${limit}&offset=${offset}` );
  }
  getAllPokemons(){
    return this.getPokemons(1400,0);
  }
}
