import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/model/movie';
import { ActivatedRoute } from '@angular/router';
import { FilmServiceService } from 'src/app/shared/service/film-service.service';

@Component({
  selector: 'app-similiar-movies',
  templateUrl: './similiar-movies.component.html',
  styleUrls: ['./similiar-movies.component.scss']
})
export class SimiliarMoviesComponent implements OnInit {
  similarMovies: Movie[] = [] as Movie[];
  constructor(
    private route: ActivatedRoute,
    private service: FilmServiceService
  ) {
    this.route.parent.params.subscribe(params => {
      if (params.id != null) {
        const id = +params.id;
        this.service.getSimilarMovie(id).subscribe(movies => {
          this.similarMovies = movies.results;
          console.log(movies.results);
        });
      }
    });
  }

  ngOnInit() {}
}
