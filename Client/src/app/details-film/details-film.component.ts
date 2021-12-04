import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceFilm} from "../Service/service-film.service";
import {film} from "../Modules/Films";

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {
  film : any;
  filmId :any;


  constructor(
    private roote: ActivatedRoute,
    private service: ServiceFilm
  ) { }

  ngOnInit(): void {
    const id :number = this.roote.snapshot.params['id'];
    this.filmId=id;
    this.service.getDetailFilm(id).subscribe((result:any)=>{
      this.film=result;
    })}
  getImageFromServer(urlImg: string){
    
      const Img = "https://image.tmdb.org/t/p/w500/"+ urlImg;
      return Img;
    
  }

  AddToFavrite(filmid:any){
this.service.AddToFavoris(filmid).subscribe((res:any)=>{
  console.log(res)
});
  }
}
