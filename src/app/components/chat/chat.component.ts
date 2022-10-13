import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import * as moment from 'moment';



import { ChatService } from '../../service/chat.service';
import { Observable } from 'rxjs';


// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })
// export class ChatComponent implements OnInit {

//   items : Observable<any[]>;
//   mensaje : string = '';
//   public usuarioLogueado:any;
 

//   constructor(private chat : ChatService,private authService:AuthService) { 
//     this.items = this.chat.items;
    
//   }

//   enviarMensaje(){
//     this.chat.enviarMensaje(this.mensaje, this.usuarioLogueado);
//     this.mensaje = '';
//   }

//   ngOnInit(): void {
//     this.authService.getUserLogged().subscribe(u=> this.usuarioLogueado = u);
//   }
// }

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public usuarioLogueado:any;
  public chat: any;
  public tamanioImagen:object;
  public mensaje:string;
  public formatoMensajeEnviado:string;
  public formatoMensajeRecibido:string;
  public mostrarChat:boolean;
  items : Observable<any[]>;

  constructor(private authService:AuthService, private chatService : ChatService) { 
    this.tamanioImagen={'width':"20px"};
    this.chat = [];
    this.mensaje=""
    this.formatoMensajeEnviado = "mensaje bg-success p-2 fs-5 rounded-pill fw-light enviado";
    this.formatoMensajeRecibido= "mensaje bg-secondary p-2 fs-5 rounded-pill fw-light recibido" ;
    this.mostrarChat = false;
        this.items = this.chatService.items;
  }
  
  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(u=> this.usuarioLogueado = u);
  }

  enviarMensaje(){
    
    if(this.mensaje.split(" ").length-1 != this.mensaje.length){
      const mensaje = {id:this.usuarioLogueado.uid,mensaje:this.mensaje,};
      console.log(this.usuarioLogueado);
      this.chat.push(mensaje);

      this.chatService.enviarMensaje(mensaje, this.usuarioLogueado.email);

    }
    this.mensaje="";
    setTimeout(() => {
      
      this.scrollUltimoElemento();
    }, 30);
  }

  private scrollUltimoElemento():void{
    const mensajes:any = document.querySelectorAll(".mensaje");
    let posicion = mensajes[mensajes.length-1].offsetTop;
    
    const contenedorMsj = document.querySelector("#contendor-msjs");
    if(contenedorMsj != null){
      contenedorMsj.scrollTop=posicion;
    }
    

  }

  cambiarEstadoChat(){

    this.mostrarChat = this.mostrarChat ? false : true;
   
  }

}