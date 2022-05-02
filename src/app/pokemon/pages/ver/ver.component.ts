import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { switchMap, tap } from 'rxjs/operators';
import { Pokemon, Type } from '../../interface/pokemonInterface';


@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  pokemon!: Pokemon;
  url? : string;
  type?: Type[];
  experiencia!: number;

  constructor( private activateRoute: ActivatedRoute, private pokemonService: PokemonService,
    private router:Router ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.pokemonService.getPokemon( id ) ),
        tap( console.log )
      ).subscribe( (resp:Pokemon) => {

      this.pokemon = resp;
      this.type = resp.types;
      this.experiencia = (resp?.base_experience) ? resp?.base_experience : 0;
      this.url = resp.sprites?.front_default;

        if( resp.id == null ){
          this.router.navigate(['/pokemon']);
        }

    } ) ;

  }

  regresar(){
    console.log("hola");

    this.router.navigate(['pokemon/inicio']);
  }

}
