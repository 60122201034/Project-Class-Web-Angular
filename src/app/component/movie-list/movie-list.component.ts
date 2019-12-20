import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { Router } from '@angular/router';
import { AuthService } from "src/app/auth.service";

import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  MovieList: AngularFireList<any>;
  Movie: any[];

  constructor(private auth: AuthService, db: AngularFireDatabase ,private router: Router) {
    this.MovieList = db.list("Movie");
  }

  ngOnInit() {
    this.MovieList.snapshotChanges()
      .map(actions => {
        return actions.map(action => ({
          key: action.key,
          value: action.payload.val()
        }));
      })
      .subscribe(items => {
        this.Movie = items;
      });
  }

  editMovie(data) {
    this.router.navigate([`/editMovie/${data.key}`]);
    }

  delMovie(data) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        console.log(data);
    this.MovieList.remove(data.key);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
  }

  viewMovie(data) {
    console.log(data);
    this.router.navigate([`/detailMovie/${data.key}`]);
    }
    logout() {
    this.auth.logout();
    }
}
