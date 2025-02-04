import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvolutionChain } from '../../models/evolutionChain.model';
import { PokemonSpecies } from '../../models/pokemonSpecies.model';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {

  constructor(private _httpClient: HttpClient) { }

  getSpecies(pokemonName: string): Observable<PokemonSpecies> {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
    return this._httpClient.get<PokemonSpecies>(url);
  }

  getEvolutionChain(url: string): Observable<EvolutionChain> {
    return this._httpClient.get<EvolutionChain>(url);
  }
}
