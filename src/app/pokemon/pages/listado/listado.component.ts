import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/pokemonInterface';
import { PokemonService } from '../../services/pokemon.service';
import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  public  pokemons: any[] = [];
  pageActual: number = 1;

  ngOnInit(): void {

    this.pokemonService.getAllPokemons().subscribe( (pokemons: any[]) => {
      this.pokemons = pokemons;
      });

  }



}
