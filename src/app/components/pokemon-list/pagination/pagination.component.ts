import { Component, EventEmitter, Output } from '@angular/core';
import { PaginatedPokemonData } from '../../../models/paginatedPokemonData.model';
import { PokemonUrl } from '../../../models/pokemonUrl.model';
import { PokemonDataService } from '../../../tools/services/pokemon-data.service';

@Component({
  selector: 'app-pagination',
  standalone: false,

  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Output() onChangePage: EventEmitter<PokemonUrl[]>;

  private _totalPages: number = 0;
  private _previousPage: string |null = null;
  private _nextPage: string | null = null;

  currentPage: number = 1;

  constructor(private _pokeService: PokemonDataService) {
    this.onChangePage = new EventEmitter<PokemonUrl[]>();
  }

  private _updateMetaData(data: PaginatedPokemonData) {
    this._previousPage = data.previous;
    this._nextPage = data.next;
    this.onChangePage.emit(data.results);
  }

  ngOnInit() {
    this._pokeService.getAll().subscribe({
      next: (data) => {
        this._totalPages = Math.ceil(data.count / this._pokeService.LIMIT);
        this._updateMetaData(data);
      },
      error: (error) => console.log(error),
    });
  }

  getNextPage() {
    if (this._nextPage) {
      this._pokeService.getAll(this._nextPage).subscribe({
        next: (data) => {
          console.log("🚀 ~ PaginationComponent ~ this._pokeService.getAll ~ data:", data);
          this._updateMetaData(data);
        },
        error: (err) => console.log(err),
      });
    }
  }

  getPreviousPage() {
    if (this._previousPage) {
      this._pokeService.getAll(this._previousPage).subscribe({
        next: (data) => {
          console.log("🚀 ~ PaginationComponent ~ this._pokeService.getAll ~ data:", data);
          this._updateMetaData(data);
        },
        error: (err) => console.log(err),
      });
    }
  }

  getFirstPage() {
    this._pokeService.getAllFirstPage().subscribe({
      next: (data) => {
        console.log("🚀 ~ PaginationComponent ~ this._pokeService.getAllFirstPage ~ data:", data);
        this._updateMetaData(data);
      },
      error: (error) => console.log(error),
    });
  }

  getLastPage() {
    this._pokeService.getAllLastPage(this._totalPages).subscribe({
      next: (data) => {
        console.log("🚀 ~ PaginationComponent ~ this._pokeService.getAllLastPage ~ data:", data);
        this._updateMetaData(data);
      },
      error: (error) => console.log(error),
    });
  }

  getPage(pageNb: number) {
    this._pokeService.getAllPage(pageNb).subscribe({
      next: (data) => {
        console.log("🚀 ~ PaginationComponent ~ this._pokeService.getAllPage ~ data:", data);
        this._updateMetaData(data);
      },
      error: (error) => console.log(error),
    });
  }
}
