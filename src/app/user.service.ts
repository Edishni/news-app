import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
curentUser:any='Welcome QUEST';
  constructor( public db:AngularFirestore,public abAuth:AngularFireAuth) { }

  getCurrentUser(){
    return new Promise<any>(
      (resolve,reject) =>{
        const user = firebase.auth().onAuthStateChanged( (user) => {
          console.log(user);
          user? this.curentUser=user.displayName:this.curentUser='Welcome QUEST';
          
          user? resolve(user) : resolve(null);
        })

      }
    )
  }
}
