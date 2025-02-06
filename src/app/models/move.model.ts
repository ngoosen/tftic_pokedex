import { PokemonUrl } from "./pokemonUrl.model";

export interface Move {
  id: number;
  name: string;
  accuracy: number;
  effet_chance: number;
  pp: number;
  priority: number;
  power: number;

  effect_entries: {
    effect: string;
    short_effect: string;
    language: PokemonUrl;
  }[];

  names: {
    name: string;
    language: PokemonUrl;
  }[];

  flavor_text_entries: {
    flavor_text: string;
    language: PokemonUrl;
  }[];
}
