import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmlistComponent } from './filmlist/filmlist.component';
import { FilmServiceService } from '../service/film-service.service';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { HomepageComponent } from './homepage/homepage.component';

let routing = RouterModule.forChild([
  { path: 'movies', component: HomepageComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
]);

@NgModule({
  declarations: [
    NavbarComponent,
    FilmlistComponent,
    MovieComponent,
    HomepageComponent
  ],
  imports: [CommonModule, RouterModule, routing],
  exports: [NavbarComponent, FilmlistComponent, MovieComponent],
  providers: [FilmServiceService]
})
export class HomepageModule {}
