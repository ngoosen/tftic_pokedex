import { PokemonUrl } from "./pokemonUrl.model";

interface ChainLink {
  species: PokemonUrl;
  evolves_to: ChainLink[];
}

export interface EvolutionChain {
  id: number;
  chain: ChainLink;
}
