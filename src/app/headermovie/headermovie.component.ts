import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Movie';


@Component({
  selector: 'app-headermovie',
  templateUrl: './headermovie.component.html',
  styleUrls: ['./headermovie.component.css']
})
export class HeadermovieComponent implements OnInit {
@Input() mymovie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
