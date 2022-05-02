import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { VerComponent } from './pages/ver/ver.component';

//
import { PokemonRoutingModule } from './pokemon-routing.module';
import { HomePokemonComponent } from './pages/home-pokemon.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpecieComponent } from './pages/specie/specie.component';

@NgModule({
  declarations: [ListadoComponent, VerComponent,  HomePokemonComponent, SpecieComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    SharedModule,
    PokemonRoutingModule,
  ]
  ,exports:[
    HomePokemonComponent
  ]
})
export class PokemonModule { }
