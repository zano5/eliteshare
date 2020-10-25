import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: AngularFireAuth) { }


  createEmailPassword(email, password){

     return this.auth.auth.createUserWithEmailAndPassword(email,password);
  }


  login(email,password){

    this.auth.auth.signInWithEmailAndPassword(email,password).then(() =>{


    }).then(() =>{

    }).catch(err =>{

    })
  }
}
