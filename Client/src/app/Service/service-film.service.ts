import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';



const URL = environment.URL;


@Injectable({
  providedIn: 'root'
})
export class ServiceFilm {


 
  constructor(private http: HttpClient) { }
 

 
  films: Array<any> = [];
  flimsSubject = new Subject<any>();
  getAllFilms(page: number) {
    const AllFilms = "https://api.themoviedb.org/3/movie/popular?api_key=653c2ee8cd95fbd2626732aa98a8333e&page=" + page;
    return this.http.get(AllFilms).subscribe((films: any) => {
      this.films = films;
      
      this.emitFilmsSubject();
    });
  }

  emitFilmsSubject() {
    this.flimsSubject.next(this.films
    );
  }

  getSpecificFilm(query: string, page: number) {
    //
    const FilmURL = "https://api.themoviedb.org/3/search/movie?api_key=653c2ee8cd95fbd2626732aa98a8333e&query=" + query;
    return this.http.get(FilmURL).
      toPromise().then((Response: any) => {
        console.log(Response.results);

        return Response.results;
      },
        (error) => {
          console.log("Error ", error);
        }
      )
  }

  

  getDetailFilm(id: any) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=53cd43478eccb1239bfa57194c3cfe90&language=en-US';
    return this.http.get(url);
  }

  

 

  GetCommentaire(filmId: any) {
    // const url = URL + "/api/comment/" + filmId;
    const url = URL + "/api/comment/" + filmId;
    return this.http.get(url);
  }

  AddCommentaire(filmId: any, comment: any) {
    const url = URL + "/api/comment";
    const body = { filmId: filmId, comment: comment };
    return this.http.post(url, body);
  }
  GetFavoris() {
    
    const url = URL + "/api/favoris" ;
    return this.http.get(url);
  }

  AddToFavoris(filmId: any) {
    const url = URL + "/api/favoris";
    const body = { filmId: filmId };
    return this.http.post(url, body);
  }


}
