import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  itemsRef : any;
  items : Observable<any[]>;

  constructor(public db : AngularFireDatabase) { 
    this.itemsRef = db.list('/chat')
    this.items = db.list('/chat').valueChanges();
  }

  enviarMensaje(mensaje : object, user : any){
    this.itemsRef.push({
      name : user,
      message : mensaje,
      time : moment().format('LTS')
    })
  }
}
