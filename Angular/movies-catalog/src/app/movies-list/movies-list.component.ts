import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MovieModel } from '../movies.model';
import {  HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';




@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
 topMoviesList: MovieModel [] =[] ;
  movieSlice: MovieModel [] ;

  constructor(private http: HttpClient,
              private router: Router) {

               }





   ngOnInit () {
    for (let i =1 ; i < 6; i++) {
      this.http
    .get<{ page: number; results: MovieModel[] }>(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=e0c76c6785a54d1aaac26ae0b841957d&language=en-US&page='+i
    )

    .subscribe((responseData) => {
      this.topMoviesList = this.topMoviesList.concat(responseData['results']);




    this.movieSlice=this.topMoviesList.slice(0,10);
    }
    );

    }








  }
  onClick(index: number){
    console.log(index)
  }
  onPageChange(event: PageEvent){
    console.log(event)

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex> this.topMoviesList.length){
      endIndex = this.topMoviesList.length;
    }
    this.movieSlice = this.topMoviesList.slice(startIndex, endIndex);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
});
  }


}
