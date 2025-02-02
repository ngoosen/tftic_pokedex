import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedPokemonData } from '../../models/paginatedPokemonData.model';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {
  private _basePokemonUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private _httpClient: HttpClient) { }

  private _getNonPaginatedResults(totalPokemon: number): Observable<PaginatedPokemonData> {
    const url = `${this._basePokemonUrl}?offset=0&limit=${totalPokemon}`;
    console.log("🚀 ~ PokemonDataService ~ _getNonPaginatedResults ~ url:", url);
    return this._httpClient.get<PaginatedPokemonData>(url)
  }

  private _getPokemonCount(): number | void {
    this._httpClient
      .get<PaginatedPokemonData>(this._basePokemonUrl)
      .subscribe({
        next: (data) => {
          return data.count;
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  getAll(): Observable<PaginatedPokemonData> {
    const totalPokemon = this._getPokemonCount() ?? 1304;
    const url = `${this._basePokemonUrl}?offset=0&limit=${totalPokemon}`;
    return this._httpClient.get<PaginatedPokemonData>(url);
  }

  getById(id: number): Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(`${this._basePokemonUrl}/${id}`)
  }

  getByName(name: string): Observable<Pokemon> {
    return this._httpClient.get<Pokemon>(`${this._basePokemonUrl}/${name}`)
  }
}
