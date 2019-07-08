import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmlistComponent } from './filmlist/filmlist.component';
import { FilmServiceService } from '../service/film-service.service';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { StarComponent } from './star/star.component';
import { TrailerComponent } from './trailer/trailer.component';
import { SimiliarMoviesComponent } from './similiar-movies/similiar-movies.component';

let routing = RouterModule.forChild([
  { path: 'movies', component: HomepageComponent },
  {
    path: 'movie/:id',
    component: MovieComponent,
    children: [
      { path: 'cast', component: CastListComponent },
      { path: 'trailers', component: TrailerComponent },
      { path: 'similarMovies', component: SimiliarMoviesComponent }
    ]
  },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'star/:id', component: StarComponent }
]);

@NgModule({
  declarations: [
    NavbarComponent,
    FilmlistComponent,
    MovieComponent,
    HomepageComponent,
    CastListComponent,
    StarComponent,
    TrailerComponent,
    SimiliarMoviesComponent
  ],
  imports: [CommonModule, RouterModule, routing],
  exports: [NavbarComponent, FilmlistComponent, MovieComponent],
  providers: [FilmServiceService]
})
export class HomepageModule {}
