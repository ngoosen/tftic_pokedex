import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list/pokemon-list.component';
import { PokemonPageComponent } from './components/pokemon/pokemon-page/pokemon-page.component';

const routes: Routes = [
  { path : "", pathMatch: "full", component: PokemonListComponent, },
  { path : "pokemon/:id", pathMatch: "full", component: PokemonPageComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
