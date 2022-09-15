import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-registro',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  email='';
  password='';
  messageError='';
  ngOnInit(): void {
  }

addUser(){
  this.authService.registerUser(this.email,this.password)
  .then((res)=>{
    this.router.navigate(['home']);
  }).catch(err => {
    console.log(err);
    this.messageError = err;
  });
  
}


}