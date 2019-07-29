import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/shared/service/film-service.service';
import { Movie } from 'src/app/shared/model/movie';

@Component({
  selector: 'app-movielist',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private filmService: FilmServiceService) {
    this.filmService
      .discoverMovies()
      .subscribe(result => (this.movies = result.results));
  }
}
