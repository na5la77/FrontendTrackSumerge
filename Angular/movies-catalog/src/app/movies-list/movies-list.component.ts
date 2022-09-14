import {
  Component,
  Injectable,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MovieModel } from '../movies.model';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { MoviesService } from '../movies.service';

@Injectable()
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  topMoviesList: MovieModel[] = [];
  movieSlice: MovieModel[];
  selectedMovieID: number;
  startIndex: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    localStorage.setItem('loggedIn', 'true')
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

       this.moviesService.getMovies().subscribe((response: any) => {

        this.topMoviesList = this.topMoviesList.concat (response.content);
        console.log(this.topMoviesList)
        //this.movieSlice=this.topMoviesList.slice(0,10);

    },


    )

    // this.startIndex = 0;
    // for (let i = 1; i < 6; i++) {
    //   this.http
    //     .get<{ page: number; results: MovieModel[] }>(
    //       'https://api.themoviedb.org/3/movie/top_rated?api_key=e0c76c6785a54d1aaac26ae0b841957d&language=en-US&page=' +
    //         i
    //     )

    //     .subscribe((responseData) => {
    //       this.topMoviesList = this.topMoviesList.concat(
    //         responseData['results']
    //       );

    //       this.movieSlice = this.topMoviesList.slice(0, 5);
    //     });
    // }
  }
  onClick(index: number) {
    this.selectedMovieID = this.topMoviesList[index].movieId; //MOVIE_ID
    this.router.navigate([this.selectedMovieID], { relativeTo: this.route });
    console.log(this.selectedMovieID)
  }
  getSelectedMovie() {
    return this.selectedMovieID;
  }

  onPageChange(event: PageEvent) {
    this.startIndex = event.pageIndex * event.pageSize;
    let endIndex = this.startIndex + event.pageSize;
    if (endIndex > this.topMoviesList.length) {
      endIndex = this.topMoviesList.length;
    }
    this.movieSlice = this.topMoviesList.slice(this.startIndex, endIndex);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  onLogout() {
    this.usersService.logout();

    this.router.navigate(['../']);
  }
}
