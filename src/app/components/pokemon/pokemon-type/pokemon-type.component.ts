import { Component, Input } from '@angular/core';
import { PokemonType } from '../../../models/pokemonType.model';
import { PokemonUrl } from '../../../models/pokemonUrl.model';
import { TypesService } from '../../../tools/services/types.service';

@Component({
  selector: 'app-pokemon-type',
  standalone: false,

  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.scss'
})
export class PokemonTypeComponent {
  @Input() type!: PokemonUrl;

  typeDetails!: PokemonType;
  typeFrenchName: string = "";

  constructor (private _typeService: TypesService) { }

  ngOnInit() {
    this._typeService.getType(this.type.name).subscribe({
      next: (data) => {
        // console.log("data", data);
        this.typeDetails = data;
        const frenchType = data.names.find(type => type.language.name === "fr");

        if (frenchType) {
          this.typeFrenchName = frenchType.name;
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
