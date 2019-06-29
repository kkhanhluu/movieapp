import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/service/film-service.service';
import { Movie } from 'src/app/model/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  private movie: Movie;
  private id: number; 
  constructor(private service: FilmServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['id']; 
      console.log(id);
      if (id != null) {
        this.service.getMovieById(id).subscribe(movie => this.movie = movie);
      }
    })
  }

  ngOnInit() {}

}
