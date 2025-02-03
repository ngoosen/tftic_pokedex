import { PokemonUrl } from "./pokemonUrl.model";

export interface PokemonType {
  id: number;
  name: string;

  names: {
    language: PokemonUrl;
    name: string;
  }[];

  damage_relations: {
    no_damage_to: PokemonUrl[];
    half_damage_to: PokemonUrl[];
    double_damage_to: PokemonUrl[];
    no_damage_from: PokemonUrl[];
    half_damage_from: PokemonUrl[];
    double_damage_from: PokemonUrl[];
  };
}
