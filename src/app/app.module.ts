import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// FirebaseApp
import { firebaseConfig } from "./../environments/firebase.config";
import { AngularFireModule, FirebaseApp } from "angularfire2";
import {
  AngularFireDatabaseModule,
  AngularFireDatabase,
  AngularFireObject
} from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { HttpClientModule, HttpClient ,HttpParams } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AddMovieComponent } from "./component/add-movie/add-movie.component";
import { HomeComponent } from "./component/home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { MovieListComponent } from "./component/movie-list/movie-list.component";
import { from } from "rxjs";

import { DetailComponent } from "./component/detail/detail.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { LoginComponent } from "./component/login/login.component";
import { SignupComponent } from "./component/signup/signup.component";
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from './auth.service';
import { MovieserviceService } from './service/movieservice.service';
import { HeadermovieComponent } from './headermovie/headermovie.component';

const routes: Routes = [
  { path: "addMovie", component: AddMovieComponent ,canActivate: [AuthGuard]},
  { path: "editMovie/:id", component: AddMovieComponent,canActivate: [AuthGuard] },
  { path: "", component: HomeComponent },
  { path: "mov", component: MovieListComponent,canActivate: [AuthGuard]},
  { path: "det", component: DetailComponent },
  { path: "detailMovie/:id", component: DetailComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

// canActivate: [AuthGuard]

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovieListComponent,
    DetailComponent,
    LoginComponent,
    SignupComponent,
    HeadermovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    
  ],
  providers: [AngularFireDatabase, AuthGuard ,AuthService ,MovieserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
