import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokeapiService } from 'src/app/shared/services/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  imagePrincipal:string;
  pokemon: Pokemon;
  sprites: string[];

  constructor(private pokeApi: PokeapiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(
      mergeMap( params => {
        return this.getDataPokemon(params.name);
      })).subscribe(res=>{
        this.imagePrincipal = res.sprites.other['official-artwork'].front_default;
        this.pokemon = res;
        this.sprites = this.getSprites();
        console.log(this.sprites);
      }
      );

  }

  getSprites(){
    const sprites:string[] = [];
    sprites.push(...Object.values(this.pokemon.sprites).filter(val=> typeof val === 'string'));
    return sprites;
  }
  getDataPokemon(name){
    return this.pokeApi.getPokemon(name).pipe(
      map(res=> ({
        abilities: res.abilities,
        baseExperience: res.base_experience,
        sprites: res.sprites,
        name: res.name,
        stats: res.stats
      }))
    )
  }

}
