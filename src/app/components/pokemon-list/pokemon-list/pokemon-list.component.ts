import { Component } from '@angular/core';
import { PokemonUrl } from '../../../models/pokemonUrl.model';
import { PaginatedPokemonDataService } from '../../../tools/services/paginated-pokemon-data.service';
import { PokemonDataService } from '../../../tools/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,

  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  private _allPokemons: PokemonUrl[] = [];

  pokemonNamesList: PokemonUrl[] = [];
  showPagination: boolean = true;

  constructor (
    private _paginatedPokeService: PaginatedPokemonDataService,
    private _pokeService: PokemonDataService
  ) { }

  ngOnInit() {
    this._paginatedPokeService.getAll().subscribe({
      next: (data) => {
        this.pokemonNamesList = data.results;
      },
      error: (error) => {
        console.log(error);
      }
    });

    this._pokeService.getAll()?.subscribe({
      next: (data) => {
        this._allPokemons = data.results;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  updateList(newList: PokemonUrl[]) {
    this.pokemonNamesList = newList;
  }

  searchPokemon(pokemonName: string) {
    if (pokemonName.trim() === "") {
      this.showPagination = true;

      this._paginatedPokeService.getAll().subscribe({
        next: (data) => {
          this.pokemonNamesList = data.results;
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      this.showPagination = false;

      this.pokemonNamesList = this._allPokemons.filter(p => {
        if (p.name.startsWith(pokemonName)) return true;
        return false;
      });
    }
  }
}
