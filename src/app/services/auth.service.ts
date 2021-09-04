import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Observable<any>; // type firebase.User 
  userId: string = '';

  constructor(private fauth: AngularFireAuth) {

    this.user = fauth.user;
   }

  signup(email: string, password:string){
    console.log("SignUp",email,password);
    return this.fauth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    
    return this.fauth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.fauth.signOut();
  }
}
