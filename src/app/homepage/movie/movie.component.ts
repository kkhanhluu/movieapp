import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/service/film-service.service';
import { Movie } from 'src/app/model/movie';
import { ActivatedRoute } from '@angular/router';
import { CastListComponent } from '../cast-list/cast-list.component';
import { TrailerComponent } from '../trailer/trailer.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  private id: number;
  private posterPath: string;
  private backdropPath: string; 
  private IMAGE_URL = "https://image.tmdb.org/t/p/w500"; 
  private activeTab: string; 
  private tabs =  {CAST: "cast", TRAILERS: "trailers", SIMILAR_MOVIES: "similarMovies"};

  constructor(
    private service: FilmServiceService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id != null) {
        this.service.getMovieById(id).subscribe((movie: Movie) => {
          this.movie = movie;
          this.posterPath = `${this.IMAGE_URL}${movie.poster_path}`;
          this.backdropPath = `${this.IMAGE_URL}${movie.backdrop_path}`;
        });
      }
    });
  }

  onActivate(componentRefs) {
    if (componentRefs instanceof CastListComponent) {
      componentRefs.castList = this.movie.credits.cast; 
      this.activeTab = this.tabs.CAST; 
    } 
    else if (componentRefs instanceof TrailerComponent) {
      componentRefs.videos = this.movie.videos.results.slice(0, 3); 
      this.activeTab = this.tabs.TRAILERS;
    }
  }
  ngOnInit() {}
}
