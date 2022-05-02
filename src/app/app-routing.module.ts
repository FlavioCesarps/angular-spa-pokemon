import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerComponent } from './pokemon/pages/ver/ver.component';

const routes: Routes = [

  { path: 'pokemon', loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule) },
   // { path: 'pokemon/ver/:id', component: VerComponent},
  { path: '**', redirectTo: 'pokemon', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
