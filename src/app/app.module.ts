import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, LucideAngularModule } from "lucide-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './components/pokemon-list/pagination/pagination.component';
import { PokemonListItemComponent } from './components/pokemon-list/pokemon-list-item/pokemon-list-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list/pokemon-list.component';
import { SearchBarComponent } from './components/pokemon-list/search-bar/search-bar.component';
import { EvolutionChainComponent } from './components/pokemon/evolution-chain/evolution-chain.component';
import { PokemonPageComponent } from './components/pokemon/pokemon-page/pokemon-page.component';
import { PokemonTypeComponent } from './components/pokemon/pokemon-type/pokemon-type.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoadingComponent } from './components/shared/ui/loading/loading.component';
import { PokeballComponent } from './components/shared/ui/pokeball/pokeball.component';
import { HeightPipe } from './tools/pipes/height.pipe';
import { WeightPipe } from './tools/pipes/weight.pipe';
import { PopupComponent } from './components/shared/ui/popup/popup.component';
import { PokemonAbilitiesComponent } from './components/pokemon/pokemon-abilities/pokemon-abilities.component';
import { AbilityComponent } from './components/pokemon/pokemon-abilities/ability/ability.component';
import { MoveComponent } from './components/pokemon/pokemon-abilities/move/move.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    SearchBarComponent,
    PokemonListItemComponent,
    PaginationComponent,
    PokemonPageComponent,
    LoadingComponent,
    PokeballComponent,
    FooterComponent,
    PokemonTypeComponent,
    HeightPipe,
    WeightPipe,
    EvolutionChainComponent,
    PopupComponent,
    PokemonAbilitiesComponent,
    AbilityComponent,
    MoveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({
      ChevronLeft,
      ChevronRight,
      ChevronsLeft,
      ChevronsRight,
    }),
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
