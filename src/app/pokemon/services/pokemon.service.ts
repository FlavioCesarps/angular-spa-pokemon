import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { FetchAllPokemonResponse, Pokemon } from '../interface/pokemonInterface';
import { PokeSpecie } from '../interface/pokemonSpecie';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //private url: string = 'https://pokeapi.co/api/v2';
  private url: string = 'http://localhost:8081/api/v1/pokemon';

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<FetchAllPokemonResponse>(`${ this.url }/all`)
              .pipe(
                map( this.transformSmallPokemonIntoPokemon )
              )
  }

  private transformSmallPokemonIntoPokemon( resp: FetchAllPokemonResponse ): Pokemon[] {

    const pokemonList: Pokemon[]= [];
    pokemonList.push(resp);
    /*const pokemonList: Pokemon[] = resp.results.map( poke => {

      const urlArr = poke.url.split('/');
      const id  = urlArr[6];
      const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;

      return {
        id,
        pic,
        name: poke.name,
      }
    })*/

    return pokemonList;
  }


  getPokemon(id: string):Observable<any>{
    return this.http.get<Pokemon>(`${this.url}/${id}`).pipe(
      catchError( err => of([]) ));
  }

  /*getPokemon(id: string):Observable<any>{
    return this.http.get<Pokemon>(`${this.url}/pokemon/${id}`).pipe(
      catchError( err => of([]) ));
  }

  gePokemonSpecie( id: string ):Observable<any>{
    return this.http.get<PokeSpecie>(`${this.url}/pokemon-species/${id}`).pipe(
      catchError( err => of([]) ));
  }*/

}
