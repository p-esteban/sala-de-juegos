import { Component } from '@angular/core';

import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sala-de-juegos';
  user ={
    email:'',
    password :''
  }
 
  constructor(private authService: AuthService ) {
   
    
  }
  signUp(){
    console.log(this.user);
    const {email, password} = this.user;
    this.authService.registerUser(email,password).then(res => {
      console.log("se registro "+ res);
    })
  }
 
}