import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';

const routes: Routes = [
  // {
  //   path:"movieDetails/:id",
  //   component: MovieDetailsComponent
  // },
  // ,
  // {
  //   path:'movies',
  //   component: MoviesComponent
  // },
  // {
  //   path:'actors',
  //   component: ActorsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
