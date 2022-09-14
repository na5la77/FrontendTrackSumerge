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
    const headers = {'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzbmFraGxhQHN1bWVyZ2UuY29tIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpbiIsImV4cCI6MTY2MzI0MjA2OH0.qCDVz2ejjMZCgdSXuEbck3E9vajyCbSgmhVoMz4lVnA'}
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
        'http://localhost:8080/movies/' +
          this.route.snapshot.params['id'],{'headers':headers}

      )
      .subscribe((responseData) => {
        this.overview = responseData.overview;
        this.title = responseData.title;
        this.tagline = responseData.tagline;
        this.vote_count = responseData.vote_count;
        this.vote_average = responseData.vote_average;
        this.backdrop_path ='url(' +
        responseData.backdrop_path +
        ')'; ;
        this.poster_path = responseData.poster_path;
        console.log(this.backdrop_path);



      });
  }
  onBack() {
    this.router.navigate(['../catalog']);
  }
}
