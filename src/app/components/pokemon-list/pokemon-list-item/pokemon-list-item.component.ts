import { Component, Input } from '@angular/core';
import { PokemonUrl } from '../../../models/pokemonUrl.model';

@Component({
  selector: 'app-pokemon-list-item',
  standalone: false,

  templateUrl: './pokemon-list-item.component.html',
  styleUrl: './pokemon-list-item.component.scss'
})
export class PokemonListItemComponent {
  @Input() pokemon!: PokemonUrl;
}
