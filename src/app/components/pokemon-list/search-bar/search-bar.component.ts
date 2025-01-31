import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,

  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() onSearch: EventEmitter<string>;

  pokemonName: string = "";

  constructor () {
    this.onSearch = new EventEmitter<string>();
  }

  search() {
    this.onSearch.emit(this.pokemonName);
  }
}
