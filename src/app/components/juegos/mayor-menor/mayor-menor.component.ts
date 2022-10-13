import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit {
  puntos : number = 0;
  numAnterior : number = 0;
  numSiguiente : number = 0;
  cartaAnterior : any;
  cartaSiguiente : any;
  cartas : any;
  imgCarta : any;
  imgNumSiguiente : any;

  constructor(private toastr : ToastrService, private api : ApiService) { 
    this.api.getCards().subscribe((cartas : any) =>{
      this.cartas = cartas.cards;
      this.validarCartas();
    });
  }

  ngOnInit(): void {
  }

  start() {
    this.cartaSiguiente = this.cartas[Math.round(Math.random() * (13 - 1))]
    this.numSiguiente = this.cartaSiguiente.value;
    this.puntos = 0;
    this.cartaAnterior = this.cartas[Math.round(Math.random() * (13 - 1))];
    this.numAnterior = this.cartaAnterior.value;
    this.imgCarta = this.cartaAnterior.image;
    console.clear();
    console.log('anterior', this.numAnterior);
    console.log('siguiente', this.numSiguiente);
  }

  seleccionadoMayor() {
    if(this.numSiguiente >= this.numAnterior){
      this.puntos++;
      this.numAnterior = this.numSiguiente;
      this.imgCarta = this.cartaSiguiente.image;
      this.cartaSiguiente = this.cartas[Math.round(Math.random() * (13 - 1))];
      this.numSiguiente = this.cartaSiguiente.value;
      console.clear();
      console.log('anterior', this.numAnterior);
      console.log('siguiente', this.numSiguiente);
    }else{
      this.toastr.error('Perdiste!', 'El numero era menor! Volve a intentarlo!');
      this.start();
    }
  }

  seleccionadoMenor(){
    if(this.numSiguiente <= this.numAnterior){
      this.puntos++;
      this.numAnterior = this.numSiguiente;
      this.imgCarta = this.cartaSiguiente.image;
      this.cartaSiguiente = this.cartas[Math.round(Math.random() * (13 - 1))];
      this.numSiguiente = this.cartaSiguiente.value;
      console.clear();
      console.log('anterior', this.numAnterior);
      console.log('siguiente', this.numSiguiente);
    }else{
      this.toastr.error('Perdiste!', 'El numero era mayor! Volve a intentarlo!');
      this.start();
    }
  }

  validarCartas(){
    
    for(let item of this.cartas){
      switch(item.value){
        case 'JACK':
            item.value = 11
          break;
        case 'KING':
          item.value = 13
          break;
        case 'QUEEN':
          item.value = 12
          break;
        case 'ACE':
          item.value = 1
          break;
      }
    }}
}
