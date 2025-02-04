import { PokemonUrl } from "./pokemonUrl.model";

export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;

  evolution_chain: {
    url: string;
  };

  flavor_text_entries: {
    flavor_text: string;
    language: PokemonUrl;
    version: PokemonUrl;
  }[];

  names: {
    name: string;
    language: PokemonUrl;
  }[];
}
