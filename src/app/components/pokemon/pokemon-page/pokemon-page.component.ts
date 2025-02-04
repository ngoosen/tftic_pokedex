import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../models/pokemon.model';
import { PokemonDataService } from '../../../tools/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-page',
  standalone: false,

  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.scss'
})
export class PokemonPageComponent {
  pokemon!: Pokemon;
  pokemonImgSrc: string = "";

  pageIsLoading: boolean = true;

  constructor (private _activatedRoute: ActivatedRoute, private _pokeService: PokemonDataService) { }

  ngOnInit() {
    const pokemonId = this._activatedRoute.snapshot.params["id"];

    this._pokeService.getById(pokemonId).subscribe({
      next: (data) => {
        this.pokemon = data;
        // console.log("🚀 ~ PokemonPageComponent ~ this._pokeService.getById ~ data:", data);
        this.pokemonImgSrc = data.sprites.other['official-artwork'].front_default;
        this.pageIsLoading = false;
      },
      error: (e) => {
        console.log(e);
        this.pageIsLoading = false;
      },
    });
  }

  // TODO: add abilities
  // https://pokeapi.co/api/v2/pokemon/1

  // TODO: add moves
  // https://pokeapi.co/api/v2/move/13/

  // TODO: add evolution chain
  // https://pokeapi.co/api/v2/evolution-chain/1

  // TODO: add french version?
  // https://pokeapi.co/api/v2/pokemon-species/1
}
