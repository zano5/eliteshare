import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';









@Injectable({
  providedIn: 'root'
})
export class BiddingService {


  constructor(private asf: AngularFirestore) { }



  getBid(bid){

    return this.asf.collection('Bidding').snapshotChanges();
  }


  setBid(bid){

    this.asf.collection('Bidding').add(bid).then(() => {

    }).catch(err => {


    });
  }


  updateBid(bid){

    this.asf.collection('Bidding').doc(bid.key).update(bid)

  }


  setAcceptedBid(acceptedBid){

    this.asf.collection('AcceptedBid').add(acceptedBid).then(() => {

    }).catch(err => {


    });



  }






}
