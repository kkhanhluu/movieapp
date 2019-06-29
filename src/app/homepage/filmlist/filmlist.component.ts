import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from 'src/app/service/film-service.service';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
  styleUrls: ['./filmlist.component.scss']
})
export class FilmlistComponent {

  private movies: Movie[] = [];
  private indexes: number[] = Array(20).fill(0).map((x, i) => i); 
  
  constructor(private filmService: FilmServiceService) {
    this.filmService.discoverMovies().subscribe(result => this.movies = result.results); 
  }

}
