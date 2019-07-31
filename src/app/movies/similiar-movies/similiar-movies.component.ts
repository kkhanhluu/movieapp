import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/shared/model/movie';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-similiar-movies',
  templateUrl: './similiar-movies.component.html',
  styleUrls: ['./similiar-movies.component.scss']
})
export class SimiliarMoviesComponent implements OnInit {
  similarMovies: Movie[] = [] as Movie[];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataServiceService
  ) {
    this.route.parent.params.subscribe(params => {
      if (params.id != null) {
        const id = +params.id;
        this.dataService.getSimilarMovie(id).subscribe(movies => {
          this.similarMovies = movies.results;
        });
      }
    });
  }

  ngOnInit() {}
}
