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

  pokemonFrenchName: string = "";
  pokemonDescription: string = "";

  pageIsLoading: boolean = true;

  constructor (
    private _activatedRoute: ActivatedRoute,
    private _pokeService: PokemonDataService,
  ) { }

  ngOnInit() {
    const pokemonId = this._activatedRoute.snapshot.params["id"];

    this._pokeService.getById(pokemonId).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.pageIsLoading = false;
      },
      error: (e) => {
        console.log(e);
        this.pageIsLoading = false;
      },
    });

    this._pokeService.getSpecies(pokemonId).subscribe({
      next: (data) => {
        const frFlavorTextEntry = data.flavor_text_entries.find(entry => entry.language.name === "fr" && entry.version.name === "omega-ruby");

        if (frFlavorTextEntry) {
          this.pokemonDescription = frFlavorTextEntry.flavor_text;
        }

        const frNameEntry = data.names.find(name => name.language.name === "fr");

        if (frNameEntry) {
          this.pokemonFrenchName = frNameEntry.name;
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  // TODO: add abilities
  // https://pokeapi.co/api/v2/pokemon/1

  // TODO: add moves
  // https://pokeapi.co/api/v2/move/13/

  // TODO: add french version?
  // https://pokeapi.co/api/v2/pokemon-species/1
}
