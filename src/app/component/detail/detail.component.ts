import { Component, OnInit } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "angularfire2/database";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieserviceService } from "src/app/service/movieservice.service";

import swal from "sweetalert2";
import { map } from "rxjs/operators";
import { NgForm } from "@angular/forms";
import { Movie } from "src/app/Movie";
import { Observable } from 'rxjs';

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  id: any;
  comment:any;
  movies: any;
  Movie: any={};
  constructor(
    private movieService: MovieserviceService,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.CommentList = db.list('Movie/' + this.id + '/Comment');
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if(this.id){
      this.getMovieByKey(this.id)
    }
  }

  

  getMovieByKey(id: any) {
     this.db
      .object("/Movie/" + id)
      .snapshotChanges()
      .subscribe(res => {
        console.log(res.payload.val());
        this.Movie = res.payload.val();
        this.comment = Object.keys(this.Movie.Comment).map(key => this.Movie.Comment[key]); 
      });
  }

  addComment(data: NgForm) {
    if (this.id) {
      console.log("Success");
      console.log(data);
      this.db
        .list("Movie/" + this.id + "/Comment")
        .push(data.value)
        .then(this.goToHome);
      swal.fire("Comment Success!!", "", "success");
    } else {
      swal.fire("Failed!!", "Something wrong.", "error");
    }
  }
  goToHome = () => {
    window.location.reload();
  };
}
