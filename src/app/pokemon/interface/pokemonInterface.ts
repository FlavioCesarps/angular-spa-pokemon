/*export interface FetchAllPokemonResponse {
  count:    number;
  next:     string;
  previous: null;
  results:  smallPokemon[];
}*/

import { Color } from "./pokemonSpecie";

export interface FetchAllPokemonResponse {
  id:   string;
  pic:  string;
  name: string;
}

export interface smallPokemon {
  name: string;
  url:  string;
}

export interface Pokemon {
  id: string;
  name: string;
  pic: string;
  types?: Type[];
  abilities? :Ability;
  sprites?: Sprites;
  height?: number;
  order?: number;
  weight?:number;
  base_experience?:number
  pokemonSpecies?: PokemonSpecies
  preEvolution?: PreEvolution
}

export interface PokemonSpecies {
  egg_groups: Color[];
  habitat:Color;
  evolves_from_species: Color;
  shape:Color;
  color:Color;
}

export interface PreEvolution {
  name:string;
  sprite:Sprites;
}

export interface Sprites {
  front_shiny:string;
  back_default?:string;
  front_default?:string;
}

export interface poke{
  weight:                   number;
  height:                   number;
  id:                       number;
  name:                     string;
  order:                    number;
  abilities?:                Ability[];
  species?:                 Species;
  types?:                   Type[];
}
export interface Type {
  slot: number;
  type: Species;
}

export interface Ability {
  ability:   Species;
}

export interface Species {
  name: string;
  url?:  string;
}

