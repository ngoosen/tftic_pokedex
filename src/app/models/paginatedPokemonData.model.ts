import { PokemonUrl } from "./pokemonUrl.model";

export interface PaginatedPokemonData {
  count: number;
  next: string;
  previous: string;
  results: PokemonUrl[];
}
