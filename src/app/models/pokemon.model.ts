import { PokemonUrl } from "./pokemonUrl.model";

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: 6;
  weight: number;

  abilities: {
    is_hidden: boolean;
    ability: PokemonUrl
  }[];

  forms: PokemonUrl[];

  moves: {
    move: PokemonUrl
  }[];

  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    }
  }

  types: {
    type: PokemonUrl;
  }[]
}
