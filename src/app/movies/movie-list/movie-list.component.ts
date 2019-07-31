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
  loading = true;
  page = 1;

  constructor(private dataService: DataServiceService) {
    this.dataService.discoverMovies().subscribe(result => {
      this.movies = result.results;
      this.loading = false;
    });
  }

  onPageChange(page) {
    this.loading = true;
    this.dataService.discoverMovies('en', page).subscribe(result => {
      this.movies = result.results;
      this.loading = false;
    });
  }
}
