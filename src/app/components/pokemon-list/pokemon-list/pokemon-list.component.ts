import { Component } from '@angular/core';
import { PokemonUrl } from '../../../models/pokemonUrl.model';
import { PaginatedPokemonDataService } from '../../../tools/services/paginated-pokemon-data.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,

  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  pokemonNamesList: PokemonUrl[] = [];

  constructor (private _paginatedPokeService: PaginatedPokemonDataService) { }

  ngOnInit() {
    this._paginatedPokeService.getAll().subscribe({
      next: (data) => {
        this.pokemonNamesList = data.results;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  updateList(newList: PokemonUrl[]) {
    this.pokemonNamesList = newList;
  }

  searchPokemon(pokemonName: string) {
    //
  }
}
