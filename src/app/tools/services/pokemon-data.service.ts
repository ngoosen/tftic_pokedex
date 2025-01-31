import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedPokemonData } from '../../models/paginatedPokemonData.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  LIMIT: number = 21;

  private _baseUrl = "https://pokeapi.co/api/v2/pokemon";
  private _defaultUrl = `${this._baseUrl}?offset=0&limit=${this.LIMIT}`;

  constructor(private _httpClient: HttpClient) { }

  getAll(url = this._defaultUrl): Observable<PaginatedPokemonData> {
    return this._httpClient.get<PaginatedPokemonData>(url);
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
}
