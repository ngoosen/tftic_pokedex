import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListItemComponent } from './components/pokemon-list/pokemon-list-item/pokemon-list-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list/pokemon-list.component';
import { SearchBarComponent } from './components/pokemon-list/search-bar/search-bar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PaginationComponent } from './components/pokemon-list/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    SearchBarComponent,
    PokemonListItemComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
