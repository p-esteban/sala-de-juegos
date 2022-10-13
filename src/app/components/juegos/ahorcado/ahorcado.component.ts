import { Component, OnInit } from '@angular/core';
 import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  intentos : number = 6; 
  longitudPalabra : string[] = [];
  palabras : string[] = ['hola', 'mundo', 'test'];
  palabra : string = '';
  imagen : number = 1;
  jugando : boolean = false;

  constructor(private toastr : ToastrService) { }

  ngOnInit(): void {
    this.start();
  }

  start(){

    this.intentos = 6;
    this.imagen = 1;
    this.palabra = this.palabras[Math.round(Math.random() * (this.palabras.length - 1))];
    this.longitudPalabra = Array(this.palabra.length).fill('_');
    this.jugando = true;

  }

  letraSeleccionada(letra : string){
    if(this.jugando){
      let flag : boolean = false;
      for(let i = 0; i < this.palabra.length; i++){
        if(letra.toLowerCase() == this.palabra[i]){
          this.longitudPalabra[i] = letra;
          flag = true;
        }
      }
  
      if(!flag){
        this.intentos--;
        console.log("antes " + this.intentos)
        if(this.intentos == 1){
          // this.imagen++;
          console.log("despues " + this.intentos)
          this.stop();
        }else{
          this.imagen++;
        }
      }
    }
  }

  stop(){
    this.jugando = false;
    setTimeout(() =>{

     
      this.toastr.error('Perdiste!', 'Te quedaste sin intentos! La palabra volvio a cambiar!');
      
    }, 50);
    this.start();

  }
}
