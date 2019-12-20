import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router'; 
import swal from 'sweetalert2'; 

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.css"]
})
export class AddMovieComponent implements OnInit {
  Movie: any = {};
  title: string = "Add Movie";
  id: any;
  selectedFile = null;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.getMovieByKey(this.id);
      this.title = "Edit Movie";
    }
  }
  addMovie(data: NgForm) {
    if (this.id) {
      this.db.list("Movie").update(this.id, data.value).then(this.goToHome);
      swal.fire(
        'Success!!',
        'Edit Movie',
        'success'
      )
    } else {
      this.db.list("Movie").push(data.value).then(this.goToHome);
      swal.fire(
        'Success!!',
        'Add Movie',
        'success'
      )
    }
  }
  getMovieByKey(id) {
    this.Movie = this.db
      .object("Movie/" + id)
      .snapshotChanges()
      .subscribe(res => {
        this.Movie = res.payload.val() ;
      });
  }
  goToHome=()=>{
    this.router.navigate(['/mov']);
    }
    
}
