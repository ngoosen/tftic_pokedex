import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-abilities',
  standalone: false,

  templateUrl: './pokemon-abilities.component.html',
  styleUrl: './pokemon-abilities.component.scss'
})
export class PokemonAbilitiesComponent {
  @Input() pokemon!: Pokemon;
}
