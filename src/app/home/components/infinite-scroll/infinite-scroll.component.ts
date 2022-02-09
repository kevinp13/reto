import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {
  @Input() pokemonsAll;
  numbers = [];
  private finishPage = 5;
  private actualPage = 0;
  imageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  pokemons = [];

  constructor() {}

  ngOnInit(): void {
    this.get20pokemons();
  }

  getIdPokemons(pokemons: { name: string; url: string }[]) {
    return pokemons.map((pokemon) => {
      const words = pokemon.url.split('/');
      return { ...pokemon, id: words[words.length - 2] };
    });
  }
  get20pokemons() {
    this.pokemons.push(
      ...this.pokemonsAll.slice(this.actualPage * 20, this.actualPage * 20 + 20)
    );
    console.log(this.pokemons)
  }
  onScroll() {
    if (this.actualPage < this.finishPage) {
      this.actualPage++;
      this.get20pokemons();
    } else {
      console.log('No more pokemons. Finish page!');
    }
  }
}
