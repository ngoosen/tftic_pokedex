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
  @Input() disablePopups: boolean = false;

  typeDetails!: PokemonType;
  typeFrenchName: string = "";

  showToolbox: boolean = false;
  showPopup: boolean = false;

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

  toggleToolbox(value: boolean) {
    if (this.disablePopups) return;

    this.showToolbox = value;
  }

  openPopup() {
    if (this.disablePopups) return;

    this.showPopup = true;
  }

  closePopup() {
    if (this.disablePopups) return;

    this.showPopup = false;
  }
}
