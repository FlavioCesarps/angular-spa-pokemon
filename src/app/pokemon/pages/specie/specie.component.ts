import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Pokemon } from '../../interface/pokemonInterface';
import { Color, PokeSpecie } from '../../interface/pokemonSpecie';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {

  pokeSpecies!: Pokemon;
  data!: Pokemon;

  color!: string;
  hayError: boolean = false;
  habitat!: string;
  shape!: string;
  egg_groups?: Color[];
  pre_evolution!: any;
  notEvolution: boolean = false;
  url?: string;

  constructor( private activateRoute: ActivatedRoute, private pokemonService: PokemonService,
    private router:Router ) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap( ({id}) => this.pokemonService.getPokemon( id ) ),
      //switchMap( ({id}) => this.pokemonService.gePokemonSpecie( id ) ),
      tap( console.log )
    ).subscribe( (pokeSpecies:Pokemon) => {

      this.color = (pokeSpecies.pokemonSpecies?.color?.name) ? pokeSpecies.pokemonSpecies?.color?.name : 'unknown';
      this.habitat = (pokeSpecies.pokemonSpecies?.habitat?.name) ? pokeSpecies.pokemonSpecies?.habitat?.name : 'unknown';
      this.shape = (pokeSpecies.pokemonSpecies?.shape?.name)? pokeSpecies.pokemonSpecies?.shape?.name : 'unknown';
      this.egg_groups =pokeSpecies.pokemonSpecies?.egg_groups;

      let pre ;
      pre = pokeSpecies.preEvolution?.name;

      if( pre == undefined ){
        this.notEvolution = true;
      }else{
        this.notEvolution = false;
        this.pre_evolution = pre;

        this.data = pokeSpecies;

        this.url = pokeSpecies.preEvolution?.sprite.front_default;
      }
    })
  }

  navigate(){
    this.router.navigate(["/pokemon/ver/" + this.data?.preEvolution?.name]);

  }
};



      /*this.pokeSpecies = pokeSpecies;
      this.color = (pokeSpecies.color?.name) ? pokeSpecies.color?.name : 'unknown';
      this.habitat = (pokeSpecies.habitat?.name) ? pokeSpecies.habitat.name : 'unknown';
      this.shape = (pokeSpecies.shape?.name)? pokeSpecies.shape?.name : 'unknown';
      this.egg_groups =pokeSpecies.egg_groups;

      let pre ;
      pre = pokeSpecies.evolves_from_species?.name;

      if( pre == undefined ){
        this.notEvolution = true;
      }else{
        this.notEvolution = false;
        this.pre_evolution = pre;
        this.pokemonService.getPokemon( this.pre_evolution ).subscribe( (data: Pokemon) => {
          this.data = data;
          this.url = data.sprites?.front_default;


        } );
      }*/


      // if( !pokeSpecies.evolves_from_species == null ) {
      //   this.notEvolution = false;
      // }else{
      //   this.notEvolution = true;
      // }

