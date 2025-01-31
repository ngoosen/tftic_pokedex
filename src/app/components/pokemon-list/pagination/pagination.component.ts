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

  private _previousPage: string |null = null;
  private _nextPage: string | null = null;

  totalPages: number = 1;
  currentPage: number = 1;
  currentPages: number[] = [1, 2, 3, 4, 5];

  constructor(private _pokeService: PokemonDataService) {
    this.onChangePage = new EventEmitter<PokemonUrl[]>();
  }

  private _updateMetaData(data: PaginatedPokemonData) {
    this._previousPage = data.previous;
    this._nextPage = data.next;
    this.onChangePage.emit(data.results);

    const newPages: number[] = [];

    if (this.currentPage > 3) {
      for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
        if (i <= this.totalPages) {
          newPages.push(i);
        }
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        if (i <= this.totalPages) {
          newPages.push(i);
        }
      }
    }

    this.currentPages = newPages;
  }

  ngOnInit() {
    this._pokeService.getAll().subscribe({
      next: (data) => {
        this.totalPages = Math.ceil(data.count / this._pokeService.LIMIT);
        this._updateMetaData(data);
      },
      error: (error) => console.log(error),
    });
  }

  getNextPage() {
    if (this._nextPage) {
      this._pokeService.getAll(this._nextPage).subscribe({
        next: (data) => {
          this.currentPage++;
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
          this.currentPage--;
          this._updateMetaData(data);
        },
        error: (err) => console.log(err),
      });
    }
  }

  getFirstPage() {
    this._pokeService.getAllFirstPage().subscribe({
      next: (data) => {
        this.currentPage = 1;
        this._updateMetaData(data);
      },
      error: (error) => console.log(error),
    });
  }

  getLastPage() {
    this._pokeService.getAllLastPage(this.totalPages).subscribe({
      next: (data) => {
        this.currentPage = this.totalPages;
        this._updateMetaData(data);
      },
      error: (error) => console.log(error),
    });
  }

  getPage(pageNb: number) {
    this._pokeService.getAllPage(pageNb).subscribe({
      next: (data) => {
        this.currentPage = pageNb;
        this._updateMetaData(data);
      },
      error: (error) => console.log(error),
    });
  }
}
