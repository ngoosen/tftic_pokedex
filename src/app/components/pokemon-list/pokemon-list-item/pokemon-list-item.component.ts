import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonUrl } from '../../../models/pokemonUrl.model';

@Component({
  selector: 'app-pokemon-list-item',
  standalone: false,

  templateUrl: './pokemon-list-item.component.html',
  styleUrl: './pokemon-list-item.component.scss'
})
export class PokemonListItemComponent {
  @Input() pokemon!: PokemonUrl;

  constructor(private _router: Router) { }

  goToPokemonPage(url: string) {
    const pokemonId = url.split("/").slice(-2)[0];
    this._router.navigate(["/pokemon", pokemonId]);
  }
}
