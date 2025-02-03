import { PokemonUrl } from "./pokemonUrl.model";

export interface PokemonType {
  id: number;
  name: string;

  names: {
    language: PokemonUrl;
    name: string;
  }[];
}
