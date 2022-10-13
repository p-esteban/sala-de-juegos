import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LogService } from 'src/app/service/log.service';
import * as moment from 'moment';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  user ={
    email:'',
    pass:''
  }
  userLog ={
    name:'',
    date: ''
  }
  error ={
    message:''
  };
 
  messageError = '';
 
  constructor(private authService: AuthService, private router:Router, public logService:LogService) { }

  ngOnInit(): void {
  }

  autocomplete(){

    this.user.email = 'test@test.com';
    this.user.pass = '123456';
  }
  login(){
    let date = new Date();
    
    this.userLog.date = moment().format();  //date.toLocaleString(); //date.toLocaleString('es-ES',{dateStyle:'full'});
    this.userLog.name = this.user.email;


    this.authService
    .login(this.user.email,this.user.pass)
    .then((res)=>{
      
      this.logService.login(this.userLog)
      .then((res)=>{
        
      })
      .catch((error)=>{
        console.log(error);
      });
      this.router.navigate(['/home']);
    })
    .catch((error)=> this.messageError = error);
    


  }

}