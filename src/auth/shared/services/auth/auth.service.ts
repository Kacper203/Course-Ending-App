import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { tap} from "rxjs";
import { Store } from 'store';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export interface User {
    email: string,
    uid: string,
    authenticated: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  
  auth$ : any = []
    
  constructor(
    private store: Store,
    private af: AngularFireAuth,
  
  ){
    this.auth$ = this.af.authState.pipe(tap(next =>{
        if(!next) {
          this.store.set('user', null)
          return;
        }
        const user: User ={
          email: next.email,
          uid: next.uid,
          authenticated: true
        };
        this.store.set('user', user)
    }))
    console.log("xxx",this.auth$)
  }    
  
  createUser(email: string, password: string) {
    return this.af
      .createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af
      .signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return this.af.signOut();
  }

  async user(){
    return this.af.currentUser
  }

  get authState() {
    return this.af.authState
  }

}  
  