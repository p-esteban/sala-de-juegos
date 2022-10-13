import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegoRoutingModule } from './juego-routing.module';
import { JuegoComponent } from './juego.component';


@NgModule({
  declarations: [
    JuegoComponent
  ],
  imports: [
    CommonModule,
    JuegoRoutingModule
  ]
})
export class JuegoModule { }
