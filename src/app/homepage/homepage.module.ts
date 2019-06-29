import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmlistComponent } from './filmlist/filmlist.component';
import { FilmServiceService } from '../service/film-service.service';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [NavbarComponent, FilmlistComponent, MovieComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FilmlistComponent], 
  providers: [FilmServiceService]
})
export class HomepageModule {}
