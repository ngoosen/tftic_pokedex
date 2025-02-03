import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedPokemonData } from '../../models/paginatedPokemonData.model';

@Injectable({
  providedIn: 'root'
})
export class PaginatedPokemonDataService {
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

  getAllByPage(pageNb: number): Observable<PaginatedPokemonData> {
    const offset = pageNb === 1 ? 0 : (pageNb - 1) * this.LIMIT;
    return this._httpClient.get<PaginatedPokemonData>(`${this._baseUrl}?offset=${offset}&limit=${this.LIMIT}`);
  }
}
