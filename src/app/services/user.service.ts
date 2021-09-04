import { Injectable } from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private as: AngularFirestore) { }

  addNewUser(id, name, address){
    // if key value same as parameter you pass directly
    return this.as.doc('users/' + id).set({
      name,
      address
    })
  }
}
