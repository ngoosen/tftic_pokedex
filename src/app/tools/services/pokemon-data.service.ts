import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedPokemonData } from '../../models/paginatedPokemonData.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  private _baseUrl = "https://pokeapi.co/api/v2/pokemon";

  offset: number = 0;
  LIMIT: number = 20;

  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<PaginatedPokemonData> {
    return this._httpClient.get<PaginatedPokemonData>(`${this._baseUrl}?offset=${this.offset}&limit=${this.LIMIT}`);
  }
}
