import { Injectable } from '@angular/core';
import { PokemonUrl } from '../../models/pokemonUrl.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  pokemonUrlList : PokemonUrl[] = [];

  offset: number = 0;
  LIMIT: number = 20;

  constructor() { }

  async getAll() {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";

    try {
      const response = await fetch(`${baseUrl}?offset=${this.offset}&limit=${this.LIMIT}`);
      const data = await response.json();

      this.pokemonUrlList = data.results;
    } catch (e) {
      console.log(e);
    } finally {
      return this.pokemonUrlList;
    }
  }
}
