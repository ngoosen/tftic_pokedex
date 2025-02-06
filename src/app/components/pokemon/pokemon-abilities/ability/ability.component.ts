import { Component, Input } from '@angular/core';
import { PokemonUrl } from '../../../../models/pokemonUrl.model';
import { PokemonDataService } from '../../../../tools/services/pokemon-data.service';

@Component({
  selector: 'app-ability',
  standalone: false,

  templateUrl: './ability.component.html',
  styleUrl: './ability.component.scss'
})
export class AbilityComponent {
  @Input() ability!: {
    is_hidden: boolean;
    ability: PokemonUrl
  };

  frenchName: string = "";

  constructor (private _pokeService: PokemonDataService) { }

  ngOnInit() {
    this._pokeService.getAbility(this.ability.ability.url).subscribe({
      next: (data) => {
        const frAbility = data.names.find(name => name.language.name === "fr");

        if (frAbility) {
          this.frenchName = frAbility.name;
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
