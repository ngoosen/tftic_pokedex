import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonType } from '../../models/pokemonType.model';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private _httpClient: HttpClient) { }

  getType(identifier: number | string): Observable<PokemonType> {
    const url = "https://pokeapi.co/api/v2/type/" + identifier;
    return this._httpClient.get<PokemonType>(url);
  }
}
