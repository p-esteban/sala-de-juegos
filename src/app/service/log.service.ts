import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private firestore : AngularFirestore) { }

  login(user: any){
   
    return new Promise((resolve, rejected) =>{
      this.firestore.collection('logs').add(user)
      .then(user =>{
        resolve(user);
      },(error :any) =>{
        rejected(error);
      });
     

    })
  }
}