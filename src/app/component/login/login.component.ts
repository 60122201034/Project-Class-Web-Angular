import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { from, Observable } from "rxjs";
import swal from "sweetalert2";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

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

  login() {
    this.authService.login(this.email, this.password);
    }
  // login() {
  //   const authC = this;
  //   if (this.inputEmail && this.inputPassword) {
  //     this.firebaseAuth
  //       .auth
  //       .signInWithEmailAndPassword(this.inputEmail, this.inputPassword)
  //       .then(value => {
  //         setTimeout(() => {
  //           authC.userData.displayName = value.user.displayName;
  //           authC.userData.email = value.user.email;
  //           authC.userData.uid = value.user.uid;
  //           swal.fire(
  //             'Success!',
  //             'Login Success',
  //             'success'
  //           )
  //           this.router.navigate(['/mov']);
  //           console.log('Login successful');
  //         }, 100);
  //       })
  //       .catch(err => {
  //         swal.fire(
  //                   'Failed!',
  //                   'Something Wrong',
  //                   'error'
  //                 )
  //         console.log('Something went wrong:', err.message);
  //         console.log(err);
  //       });
  //   }
  // }
}
