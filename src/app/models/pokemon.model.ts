import { PokemonUrl } from "./pokemonUrl.model";

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;

  abilities: {
    is_hidden: boolean;
    ability: PokemonUrl
  }[];

  forms: PokemonUrl[];

  moves: {
    move: PokemonUrl;
  }[];

  species: PokemonUrl;

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
