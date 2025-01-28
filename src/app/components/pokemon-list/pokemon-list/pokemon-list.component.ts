import { Component } from '@angular/core';
import { PokemonUrl } from '../../../models/pokemonUrl.model';
import { PokemonDataService } from '../../../tools/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,

  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  pokemonNamesList: PokemonUrl[] = [];

  constructor (private _pokeService: PokemonDataService) {
    // _pokeService.getAll();
    this.getData();
  }

  async getData() {
    this.pokemonNamesList = await this._pokeService.getAll();
  }
}
