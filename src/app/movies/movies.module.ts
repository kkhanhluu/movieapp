import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { SimiliarMoviesComponent } from './similiar-movies/similiar-movies.component';
import { TrailerComponent } from './trailer/trailer.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieComponent,
    SimiliarMoviesComponent,
    TrailerComponent,
    CastListComponent,
    MoviesComponent
  ],
  imports: [CommonModule, RouterModule, MoviesRoutingModule],
})
export class MoviesModule {}
