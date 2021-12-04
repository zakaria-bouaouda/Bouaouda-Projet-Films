import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { FavorisFilmComponent } from './favoris-film/favoris-film.component';
import { FilmViewComponent } from './film-view/film-view.component';



const routes: Routes = [
  {path:'', component: FilmViewComponent},
  {path: 'details/:id',component: DetailsFilmComponent},
  {path: 'favoris',component: FavorisFilmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
