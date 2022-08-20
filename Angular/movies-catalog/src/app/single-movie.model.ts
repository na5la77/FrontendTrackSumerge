export class SingleMovieModel {
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  backdrop_path: string;
  vote_count: number;
  id: number;
  genres: string[];
  tagline: string;
  constructor(
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number,
    release_date: string,
    backdrop_path: string,
    vote_count: number,
    id: number,
    genres: string[],
    tagline: string
  ) {
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
    this.vote_average = vote_average;
    this.release_date = release_date;
    this.backdrop_path = backdrop_path;
    this.vote_count = vote_count;
    this.id = id;
    this.genres = genres;
    this.tagline = tagline;
  }


  }

