import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../components/juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from '../components/juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from '../components/juegos/preguntados/preguntados.component';
import { JuegoComponent } from './juego.component';

const routes: Routes = [
  { path: '', component: JuegoComponent },
 
  {path: 'ahorcado', component: AhorcadoComponent},
  {path: 'mayormenor', component: MayorMenorComponent},
  {path: 'preguntados', component: PreguntadosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegoRoutingModule { }
