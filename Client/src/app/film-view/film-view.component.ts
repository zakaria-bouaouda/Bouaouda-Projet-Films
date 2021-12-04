import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import "../Modules/Films"
import { film } from '../Modules/Films';
import { ServiceFilm } from '../Service/service-film.service';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit,OnDestroy {


  films = [];
 
  input="";
  query = '';
  filmsIds =[];

  filmsSubscription: Subscription = new Subscription;
  constructor(private service: ServiceFilm) { }

  ngOnInit(): void {
   
    this.service.getAllFilms(1);
    this.filmsSubscription = this.service.flimsSubject.subscribe((result:any)=>{
      this.films=result.results;
    })
this.service.emitFilmsSubject();
  

  }
  ngOnDestroy(){
  this.filmsSubscription.unsubscribe();
  }

 

  ShowFilms(query: string) {
    this.service.getSpecificFilm(query, 0).then(res => {
      this.films = res;
    });
   
  }
  



}
