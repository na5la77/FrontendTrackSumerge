import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MovieModel } from "./movies.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService{
  private apiServerUrl ='';
  constructor(private http: HttpClient){}


  public getMovies(){
    const headers = {'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization': 'Bearer '+sessionStorage.getItem('access_token')}
   

    return this.http.get<{content: MovieModel[]}>('http://localhost:8080/movies',{'headers':headers})

  }

  public getMovie(movieId: number): Observable<MovieModel>{
    return this.http.get<MovieModel>('http://localhost:8080/movies/'+movieId)

  }
}
