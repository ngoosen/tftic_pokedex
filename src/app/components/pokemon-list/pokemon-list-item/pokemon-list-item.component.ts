import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonUrl } from '../../../models/pokemonUrl.model';
import { PokemonDataService } from '../../../tools/services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-list-item',
  standalone: false,

  templateUrl: './pokemon-list-item.component.html',
  styleUrl: './pokemon-list-item.component.scss'
})
export class PokemonListItemComponent {
  @Input() pokemon!: PokemonUrl;
  @Input() reloadPage: boolean = false;

  pokemonImg!: string;

  constructor(private _router: Router, private _pokeService: PokemonDataService) { }

  ngOnChanges() {
    this.pokemonImg = "";
    const pokemonId = this.pokemon.url.split("/").slice(-2)[0];

    this._pokeService.getById(parseInt(pokemonId)).subscribe({
      next: (data) => {
        this.pokemonImg = data.sprites.other['official-artwork'].front_default
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  goToPokemonPage(url: string) {
    const pokemonId = url.split("/").slice(-2)[0];
    this._router.navigate(["/pokemon", pokemonId]);

    if (this.reloadPage) {
      setTimeout(() => {
        location.reload();
        scroll(0, 0);
      }, 100);
    }
  }
}
