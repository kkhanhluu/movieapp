import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmlistComponent } from './filmlist/filmlist.component';

@NgModule({
  declarations: [NavbarComponent, FilmlistComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, FilmlistComponent]
})
export class HomepageModule {}
