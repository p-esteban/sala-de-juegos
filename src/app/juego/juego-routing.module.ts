import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../components/juegos/adivina-el-numero/adivina-el-numero.component';
import { AhorcadoComponent } from '../components/juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from '../components/juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from '../components/juegos/preguntados/preguntados.component';
import { JuegoComponent } from './juego.component';

const routes: Routes = [
  { path: '', component: JuegoComponent },
 
  {path: 'ahorcado', component: AhorcadoComponent},
  {path: 'mayormenor', component: MayorMenorComponent},
  {path: 'preguntados', component: PreguntadosComponent},
  {path: 'adivina-el-numero', component: AdivinaElNumeroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegoRoutingModule { }
