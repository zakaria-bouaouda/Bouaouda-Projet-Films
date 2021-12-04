import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { FilmComponentComponent } from './film-view/film-component/film-component.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { RouterModule } from '@angular/router';


import { CommentComponent } from './details-film/comment/comment.component';
import { FavorisFilmComponent } from './favoris-film/favoris-film.component';
@NgModule({
  declarations: [
    AppComponent,
    FilmViewComponent,
    FilmComponentComponent,
    DetailsFilmComponent,
    CommentComponent,
    FavorisFilmComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

