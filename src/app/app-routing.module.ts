import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: './homepage/homepage.module#HomepageModule'
  // }
  {
    path: '',
    loadChildren: './movies/movies.module#MoviesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
