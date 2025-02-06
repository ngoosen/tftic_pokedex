import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonSpecies } from '../../models/pokemonSpecies.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

  constructor(private _httpClient: HttpClient) { }

  getSpecies(identifier: number |string): Observable<PokemonSpecies> {
    return this._httpClient.get<PokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${identifier}`);
  }
}
