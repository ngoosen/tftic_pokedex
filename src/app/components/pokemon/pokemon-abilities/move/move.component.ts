import { Component, Input } from '@angular/core';
import { PokemonUrl } from '../../../../models/pokemonUrl.model';
import { PokemonDataService } from '../../../../tools/services/pokemon-data.service';

@Component({
  selector: 'app-move',
  standalone: false,

  templateUrl: './move.component.html',
  styleUrl: './move.component.scss'
})
export class MoveComponent {
  @Input() move!: PokemonUrl;

  frenchMoveName: string = "";

  constructor(private _pokeService: PokemonDataService) { }

  ngOnInit() {
    this._pokeService.getMove(this.move.url).subscribe({
      next: (data) => {
        const frName = data.names.find(name => name.language.name === "fr");

        if (frName) {
          this.frenchMoveName = frName.name;
        }
      }
    });
  }
}
