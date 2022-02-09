import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from '../shared/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  pokemonsAll = [];
  constructor(public pokeApi: PokeapiService) {}

  ngOnInit(): void {
    this.pokemonsAll= this.pokeApi.getPokemonsAll();
  }

}
