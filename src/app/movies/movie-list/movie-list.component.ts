import { Component } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private dataService: DataServiceService) {
    this.dataService
      .discoverMovies()
      .subscribe(result => (this.movies = result.results));
  }
}
