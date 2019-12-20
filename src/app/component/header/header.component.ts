import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  firebaseAuth: any;

  constructor(private router:Router,
    private auth: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.auth.logout();
    }
}
