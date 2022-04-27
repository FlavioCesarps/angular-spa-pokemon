import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomePokemonComponent } from './pages/home-pokemon.component';


const routes: Routes = [

  {
    path:'', component: HomePokemonComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {}
