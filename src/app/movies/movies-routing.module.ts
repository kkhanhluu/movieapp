import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { TrailersComponent } from './trailers/trailers.component';
import { SimiliarMoviesComponent } from './similiar-movies/similiar-movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  {
    path: 'movie/:id',
    component: MovieComponent,
    children: [
      { path: 'cast', component: CastListComponent },
      { path: 'trailers', component: TrailersComponent },
      { path: 'similarMovies', component: SimiliarMoviesComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
