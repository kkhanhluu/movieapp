import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/shared/model/movie';
import { CastListComponent } from '../cast-list/cast-list.component';
import { TrailerComponent } from '../trailer/trailer.component';
import { SimiliarMoviesComponent } from '../similiar-movies/similiar-movies.component';
import { IMAGE_URL } from 'src/app/shared/constants';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  private IMAGE_URL = IMAGE_URL;
  private id: number;
  movie: Movie;
  posterPath: string;
  backdropPath: string;
  // active tab
  activeTab: string;
  tabs = {
    CAST: 'cast',
    TRAILERS: 'trailers',
    SIMILAR_MOVIES: 'similarMovies'
  };

  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      if (id != null) {
        this.id = id;
        this.dataService.getMovieById(this.id).subscribe((movie: Movie) => {
          this.movie = movie;
          this.posterPath = `${this.IMAGE_URL}${movie.poster_path}`;
          this.backdropPath = `${this.IMAGE_URL}${movie.backdrop_path}`;
        });
      }
    });
  }

  async onActivate(componentRefs) {
    if (componentRefs instanceof CastListComponent) {
      componentRefs.castList = this.movie.credits.cast;
      this.activeTab = this.tabs.CAST;
    } else if (componentRefs instanceof TrailerComponent) {
      componentRefs.videos = this.movie.videos.results.slice(0, 3);
      this.activeTab = this.tabs.TRAILERS;
    } else if (componentRefs instanceof SimiliarMoviesComponent) {
      this.activeTab = this.tabs.SIMILAR_MOVIES;
    }
  }
}
