import { PokemonUrl } from "./pokemonUrl.model";

export interface PaginatedPokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonUrl[];
}
