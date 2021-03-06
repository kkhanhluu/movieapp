import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule'
  },
  { path: 'star', loadChildren: './star/star.module#StarModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'movies', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
