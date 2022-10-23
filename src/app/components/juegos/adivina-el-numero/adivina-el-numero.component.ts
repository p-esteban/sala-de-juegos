import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.scss']
})
export class AdivinaElNumeroComponent implements OnInit {

  // @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
// 
 

  numeroSecreto: number = 0;
    numeroIngresado: number=0;

    habilitar :boolean=  true;
  constructor(private toastr : ToastrService) {
  

  
    
  }

  ngOnInit() {
  }

  generarnumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.log(this.numeroSecreto);
   
  
    // this.habilitado=true;
  }
  verificar()
  {
   
    // this.ocultarVerificar=true;
      
    if (this.numeroIngresado == this.numeroSecreto ){
      
      this.toastr.success('Ganó');
      //toaster gano
      //ranking

    }else{

      this.toastr.error('mala suerte');
      //toaster
      }
     
    }
     
  }  

