import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Movie } from "../Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  private dbPath = "/Movie";

  movieRef: AngularFireList<Movie> = null;

  constructor(private db: AngularFireDatabase) {
    this.movieRef = db.list(this.dbPath);
  }
  getCustomersList(): AngularFireList<Movie> {
    return this.movieRef;
  }
  getMovieId(id: string){
    return this.db.list(this.dbPath+'/'+id);
  }
}
