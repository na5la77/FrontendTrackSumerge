import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../movies.model';
import {  HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  topMoviesList: MovieModel [] ;

  constructor(private http: HttpClient) { }

  fetchMovies(){
    this.http.get<{page:number,results:MovieModel[]}>('https://api.themoviedb.org/3/movie/top_rated?api_key=e0c76c6785a54d1aaac26ae0b841957d&language=en-US&page=1')
    .subscribe(
      responseData => {

        this.topMoviesList = responseData['results']

      }
    )

  }
  ngOnInit() {
    this.fetchMovies();
  }


}
