import { Component, Input, OnInit } from '@angular/core';
import { film } from 'src/app/Modules/Films';
import {Subscription} from "rxjs";
import {ServiceFilm} from "../../Service/service-film.service";

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']


})
export class FilmComponentComponent implements OnInit {
  @Input() film: any;

  filmsIds =[];
  constructor(private service: ServiceFilm) { }
  ngOnInit(): void {
    
  }
  afficherFilm(film: film) {

  }
  obtenirImage(urlImg: string){
    
      const Img = "https://image.tmdb.org/t/p/w500/"+ urlImg;
    return Img;
    
    
  }

}
