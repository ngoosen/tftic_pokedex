import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list/pokemon-list.component';
import { SearchBarComponent } from './components/pokemon-list/search-bar/search-bar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PokemonListItemComponent } from './components/pokemon-list/pokemon-list-item/pokemon-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    SearchBarComponent,
    PokemonListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
