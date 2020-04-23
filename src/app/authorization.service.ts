import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public currentUserName: string = 'quest';
  uestName: string = "test";
  uestPass: string = "test";


  constructor(private afAuth: AngularFireAuth, private user: UserService) { }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then
        (res => {
          resolve(res);
        },
          err => {
            console.log(err);
            reject(err);
          })
    })
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          reject(err)
        }
      )
    })
  }

  doRegister(email, pass) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  doLogout() {
    return new Promise(
      (resolve, reject) => {
        if (firebase.auth().currentUser) {
          this.afAuth.auth.signOut();
          this.user.Logined = false;
          resolve(true);
        }
        else {
          reject('user not found');
        }
      }
    )
  }
}
