import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from "./components/home/home.component";


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registro' ,component:RegisterComponent},
  {path:'home' ,component:HomeComponent},
  {path: 'sala', loadChildren: () => import('./juego/juego.module').then(m => m.JuegoModule) },

  
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
