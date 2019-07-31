import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { SimiliarMoviesComponent } from './similiar-movies/similiar-movies.component';
import { TrailersComponent } from './trailers/trailers.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { TrailerComponent } from './trailers/trailer/trailer.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieComponent,
    SimiliarMoviesComponent,
    TrailersComponent,
    CastListComponent,
    MoviesComponent,
    TrailerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MoviesRoutingModule,
    NgbPaginationModule,
    SharedModule
  ]
})
export class MoviesModule {}
