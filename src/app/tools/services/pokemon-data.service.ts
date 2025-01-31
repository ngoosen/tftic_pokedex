import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedPokemonData } from '../../models/paginatedPokemonData.model';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  LIMIT: number = 21;

  private _baseUrl = "https://pokeapi.co/api/v2/pokemon";
  private _defaultUrl = `${this._baseUrl}?offset=0&limit=${this.LIMIT}`;

  constructor(private _httpClient: HttpClient) { }

  getAll(url = this._defaultUrl): Observable<PaginatedPokemonData> {
    const limitlessUrl = url.split("limit=")[0];
    return this._httpClient.get<PaginatedPokemonData>(`${limitlessUrl}limit=${this.LIMIT}`);
  }

  getAllFirstPage(): Observable<PaginatedPokemonData> {
    return this._httpClient.get<PaginatedPokemonData>(this._defaultUrl);
  }

  getAllLastPage(totalPages : number): Observable<PaginatedPokemonData> {
    return this._httpClient.get<PaginatedPokemonData>(`${this._baseUrl}?offset=${(totalPages - 1) * this.LIMIT}&limit=${this.LIMIT}`);
  }

  getAllPage(pageNb: number): Observable<PaginatedPokemonData> {
    const offset = pageNb === 1 ? 0 : (pageNb - 1) * this.LIMIT;
    return this._httpClient.get<PaginatedPokemonData>(`${this._baseUrl}?offset=${offset}&limit=${this.LIMIT}`);
  }

  getById(id: number): Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(`${this._baseUrl}/${id}`)
  }

  getByName(name: string): Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(`${this._baseUrl}/${name}`)
  }
}
