import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { MovieModel } from "./movies.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService{
  headers = {'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Authorization': 'Bearer '+sessionStorage.getItem('access_token')}
  private apiServerUrl ='';
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router){}


  public getMovies(){



    return this.http.get<{content: MovieModel[]}>('http://localhost:8080/movies',{'headers':this.headers})

  }

  public getMovie(): Observable<{title: string;
    vote_count: number;
    overview: string;
    tagline: string;
    vote_average: number;
    backdrop_path: string;
    poster_path: string;}>{
    return this.http.get<{title: string;
      vote_count: number;
      overview: string;
      tagline: string;
      vote_average: number;
      backdrop_path: string;
      poster_path: string;}>('http://localhost:8080/movies/' +
    this.route.snapshot.params['id'],{'headers':this.headers})

  }
}
