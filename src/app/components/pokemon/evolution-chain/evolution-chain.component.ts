import { Component, Input } from '@angular/core';
import { ChainLink } from '../../../models/evolutionChain.model';
import { PokemonSpecies } from '../../../models/pokemonSpecies.model';
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

  evolutionChain: ChainLink[] = [];
  evolutions: ChainLink[][] = [];

  constructor (private _evolutionService: EvolutionService) { }

  getEvolutionChain(url: string) {
    this._evolutionService.getEvolutionChain(url).subscribe({
      next: (data) => {
        const firstPokemon = data.chain;

        // Evolution chain's second form(s)
        const middleForms = data.chain.evolves_to;

        // Evolution chain's optional third and final form(s)
        const finalForms: ChainLink[] = [];
        middleForms.map((form) => {
          form.evolves_to.map(f => finalForms.push(f));
        });

        // Dispatching evolutions
        if (middleForms.length === 1 && (finalForms.length === 0 || finalForms.length === 1)) {
          // Normal chain -> unique list
          this.evolutionChain = [firstPokemon, middleForms[0]];

          if (finalForms.length === 1) {
            this.evolutionChain.push(finalForms[0]);
          }
        } else if (middleForms.length === 1 && finalForms.length > 1) {
          // Branch at middle form -> multiple lists
          finalForms.forEach(pokemon => {
            this.evolutions.push([firstPokemon, middleForms[0], pokemon]);
          });
        } else if (middleForms.length > 1 && finalForms.length === 1) {
          // Branch at first pokemon, but only one middle form evolves again (literally just one pokemon called Applin)

          middleForms.forEach((pokemon) => {
            const cell = [firstPokemon, pokemon];

            if (pokemon.evolves_to.length > 0) {
              cell.push(pokemon.evolves_to[0]);
            }

            this.evolutions.push(cell);
          });
        } else {
          // Branch at first pokemon -> multiple lists
          middleForms.forEach((pokemon, index) => {
            const cell = [firstPokemon, pokemon];

            if (finalForms[index]) {
              cell.push(finalForms[index]);
            }

            this.evolutions.push(cell);
          });
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
