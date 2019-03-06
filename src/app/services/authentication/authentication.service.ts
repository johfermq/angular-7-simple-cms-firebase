import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from './../../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

	user$: Observable<User>;

	constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {
    this.user$ = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
	}

	loginWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();
		this.angularFireAuth.auth.signInWithPopup(provider).then(credential => {
      this.updateUser(credential.user);
    });
	}

  updateUser(user) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        suscriber: true,
        admin: false,
      }
    }

    return userRef.set(data, { merge: true });
  }

	logout() {
		return this.angularFireAuth.auth.signOut();
	}
}
