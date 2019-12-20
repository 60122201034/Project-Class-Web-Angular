import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import swal from "sweetalert2";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  displayName: string;
  email: string;
  password: string;
  rePassword: string;

  private userData = {
    uid: null,
    email: null,
    displayName: null
  };

  constructor(
    public authService: AuthService,
    private router: Router,
    private firebaseAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  signup() {
    if (this.password === this.rePassword) {
      this.authService.signup(this.email, this.password, this.displayName);
    }else{
      this.authService.signup(this.email, this.password, this.displayName);
    }
  }

  // signup() {
  //   const authC = this;
  //   this.firebaseAuth
  //     .auth
  //     .createUserWithEmailAndPassword(this.inputEmail, this.inputPassword)
  //     .then(value => {
  //       console.log('Success!', value);
  //       authC.userData.uid = value.user.uid;
  //       authC.userData.email = this.inputEmail;
  //       swal.fire(
  //         'Success!',
  //         'Register Complete',
  //         'success'
  //       )
  //       this.router.navigate(['/login']);
  //       value.user.updateProfile({
  //         displayName: this.inputDisplayName
  //       }).then(() => {
  //         console.log('Update display name success!');
  //         authC.userData.displayName = value.user.displayName;
  //       }, err2 => {
  //         console.log('Update display name fail:', err2.message);
  //         console.log(err2);
  //       });

  //     })
  //     .catch(err => {
  //       swal.fire(
  //         'Failed!',
  //         'Something Wrong',
  //         'error'
  //       )
  //       console.log('Something went wrong:' , err.message);
  //       console.log(err);
  //     });
  // }
}
