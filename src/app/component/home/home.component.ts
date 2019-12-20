import { Component, OnInit } from "@angular/core";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  MovieList: AngularFireList<any>;
  Movie: any[];

  constructor(db: AngularFireDatabase ,private router: Router) {
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
  viewMovie(data) {
    console.log(data);
    this.router.navigate([`/detailMovie/${data.key}`]);
    }

    
}
