import { Component, Input } from '@angular/core';
import { ChainLink } from '../../../models/evolutionChain.model';
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

  evolutions: PokemonUrl[][] = [];

  constructor (private _evolutionService: EvolutionService) { }

  getEvolutionChain(url: string) {
    this._evolutionService.getEvolutionChain(url).subscribe({
      next: (data) => {
        const firstPokemon = data.chain.species;

        // Evolution chain's second form(s)
        const middleForms = data.chain.evolves_to;
        const middlePokemons: PokemonUrl[] = middleForms.map(form => form.species);

        // Evolution chain's optional third and final form(s)
        const finalForms: ChainLink[][] = [];
        middleForms.map(form => finalForms.push(form.evolves_to));

        const finalPokemons: PokemonUrl[] = []

        finalForms.forEach(cell => {
          cell.forEach(form => finalPokemons.push(form.species));
        })


        // Dispatching evolutions
        if (middlePokemons.length === 1 && (finalPokemons.length === 0 || finalPokemons.length === 1)) {
          // Normal chain -> unique list
          this.evolutionChain = [firstPokemon, middlePokemons[0]];

          if (finalPokemons.length === 1) {
            this.evolutionChain.push(finalPokemons[0]);
          }
        } else if (middlePokemons.length === 1 && finalPokemons.length > 1) {
          // Branch at middle form -> multiple lists
          finalPokemons.forEach((pokemon, index) => {
            this.evolutions.push([firstPokemon, middlePokemons[0], pokemon]);
          });
        } else {
          // Branch at first pokemon -> multiple lists
          middlePokemons.forEach((pokemon, index) => {
            const cell = [firstPokemon, pokemon];

            if (finalPokemons[index]) {
              cell.push(finalPokemons[index]);
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
