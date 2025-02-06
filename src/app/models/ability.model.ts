import { PokemonUrl } from "./pokemonUrl.model";

export interface Ability {
  id: number;
  name: string;

  names: {
    name: string;
    language: PokemonUrl
  }[];

  effect_entries: {
    effect: string;
    short_effect: string;
    language: PokemonUrl
  }[];

  flavor_text_entries: {
    flavor_text: string;
    language: PokemonUrl;
  }[];

  pokemon: {
    is_hidden: boolean;
    slot: number;
    pokemon: PokemonUrl;
  }[];
}
