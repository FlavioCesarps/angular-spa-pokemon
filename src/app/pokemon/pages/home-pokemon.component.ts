import { Component, OnInit } from '@angular/core';

declare function customInitFunctions(): any;

@Component({
  selector: 'app-home-pokemon',
  templateUrl: './home-pokemon.component.html',
  styleUrls: ['./home-pokemon.component.css']
})
export class HomePokemonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      customInitFunctions();

  }
  pageActual: number = 1;

}
