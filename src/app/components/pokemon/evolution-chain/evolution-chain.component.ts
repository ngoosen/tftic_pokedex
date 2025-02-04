import { Component, Input } from '@angular/core';
import { PokemonSpecies } from '../../../models/pokemonSpecies.model';
import { PokemonUrl } from '../../../models/pokemonUrl.model';
import { EvolutionService } from '../../../tools/services/evolution.service';

@Component({
  selector: 'app-evolution-chain',
  standalone: false,

  templateUrl: './evolution-chain.component.html',
  styleUrl: './evolution-chain.component.scss'
})
export class EvolutionChainComponent {
  @Input() pokemonName: string = "";

  species!: PokemonSpecies;
  evolutionChain: PokemonUrl[] = [];

  constructor (private _evolutionService: EvolutionService) { }

  getEvolutionChain(url: string) {
    this._evolutionService.getEvolutionChain(url).subscribe({
      next: (data) => {
        this.evolutionChain.push(data.chain.species);
        let chainLink = data.chain.evolves_to;

        while (chainLink.length > 0) {
          this.evolutionChain.push(chainLink[0].species);
          chainLink = chainLink[0].evolves_to;
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  ngOnInit() {
    this._evolutionService.getSpecies(this.pokemonName).subscribe({
      next: (data) => {
        this.species = data;
        const evolutionChainUrl = data.evolution_chain.url;
        this.getEvolutionChain(evolutionChainUrl);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
