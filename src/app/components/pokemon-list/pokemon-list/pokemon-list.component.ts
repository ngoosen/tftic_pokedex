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

  constructor (private _pokeService: PokemonDataService) { }

  ngOnInit() {
    this._pokeService.getAll().subscribe({
      next: (data) => {
        // console.log(data);
        this.pokemonNamesList = data.results
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
