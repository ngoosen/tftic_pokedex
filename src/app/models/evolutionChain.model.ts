import { PokemonUrl } from "./pokemonUrl.model";

export interface EvolutionDetails {
  item: PokemonUrl;
  trigger: PokemonUrl;
  gender: number;
  held_item: PokemonUrl;
  known_move: PokemonUrl;
  know_move_type: PokemonUrl;
  location: PokemonUrl;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: PokemonUrl;
  party_type: PokemonUrl;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: PokemonUrl;
  turn_upside_down: boolean;
}

export interface ChainLink {
  species: PokemonUrl;
  evolves_to: ChainLink[];
  evolution_details: EvolutionDetails[];
}

export interface EvolutionChain {
  id: number;
  chain: ChainLink;
}
