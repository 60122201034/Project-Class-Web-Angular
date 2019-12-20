import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
 
@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  private userData = {
    uid: null,
    email: null,
    displayName: null
  };
 
  constructor(private router: Router, private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }
 
  signup(email: string, password: string, displayName: string) {
    const authC = this;
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        authC.userData.uid = value.user.uid;
        authC.userData.email = email;
        value.user.updateProfile({
          displayName: displayName
        }).then(() => {
          console.log('Update display name success!');
          authC.userData.displayName = value.user.displayName;
          authC.setUserDateToLocalStorage(authC.userData);
        }, err2 => {
          console.log('Update display name fail:', err2.message);
          console.log(err2);
        });
        swal.fire(
          'Success!',
          'Register Complete',
          'success'
        )
 
      })
      .catch(err => {
        swal.fire(
          'Failed!',
          'Something Wrong',
          'error'
        )
        console.log('Something went wrong:' , err.message);
        console.log(err);
      });
  }
 
  login(email: string, password: string) {
    const authC = this;
    if (email  && password ) {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          setTimeout(() => {
            authC.userData.displayName = value.user.displayName;
            authC.userData.email = value.user.email;
            authC.userData.uid = value.user.uid;
            authC.setUserDateToLocalStorage(authC.userData);
            swal.fire(
              'Success!',
              'Login Success',
              'success'
            )
            
          }, 100);
          this.router.navigate(['/mov']);})
        .catch(err => {
          swal.fire(
            'Failed!',
            'Something Wrong',
            'error'
          )
          console.log('Something went wrong:', err.message);
          console.log(err);
        });
    }
  }
 
  
  logout() {
    swal.fire(
      'Success!',
      'Logout',
      'success'
    )
    this.firebaseAuth
      .auth
      .signOut();
    location.pathname = '/';
  }
 
  setUserDateToLocalStorage(userData) {
    if (userData) {
      let email;
      email = !userData.email || userData.email === null || userData.email === 'null' ? '' : userData.email;
      localStorage.setItem('displayName', userData.displayName);
      localStorage.setItem('email', email);
      localStorage.setItem('uid', userData.uid);
      return;
    }
  }
 
}