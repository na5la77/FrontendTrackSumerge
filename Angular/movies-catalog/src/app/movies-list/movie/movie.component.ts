import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  overview: string;
  vote_count: number;
  title: string;
  tagline: string;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.http
      .get<{
        title: string;
        vote_count: number;
        overview: string;
        tagline: string;
        vote_average: number;
        backdrop_path: string;
        poster_path: string;
      }>(
        'https://api.themoviedb.org/3/movie/' +
          this.route.snapshot.params['id'] +
          '?api_key=e0c76c6785a54d1aaac26ae0b841957d&language=en-US'
      )
      .subscribe((responseData) => {
        this.overview = responseData.overview;
        this.title = responseData.title;
        this.tagline = responseData.tagline;
        this.vote_count = responseData.vote_count;
        this.vote_average = responseData.vote_average;
        this.backdrop_path =
          'url(https://image.tmdb.org/t/p/w500' +
          responseData.backdrop_path +
          ')';
        this.poster_path = responseData.poster_path;

        console.log(this.overview);
      });
  }
  onBack() {
    this.router.navigate(['../catalog']);
  }
}
