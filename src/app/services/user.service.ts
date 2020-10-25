import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private asf: AngularFirestore) { }



  createUser(client, userID){

    this.asf.collection('User').doc(userID).set(client);

  }


  getUser(userID){

    return this.asf.collection('User').doc(userID).get();
  }



}
