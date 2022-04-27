import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error_page/error/error.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
