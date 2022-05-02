import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomePokemonComponent } from './pages/home-pokemon.component';
import { VerComponent } from './pages/ver/ver.component';


const routes: Routes = [

  {
    path:'', component: HomePokemonComponent,children: [
      { path: 'listado', component: ListadoComponent},
      { path: 'ver/:id', component: VerComponent},
      { path: '**', redirectTo: 'listado' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {}
