import { Component, Input,OnInit } from '@angular/core';
import { ServiceFilm } from "../Service/service-film.service";

@Component({
  selector: 'app-favoris-film',
  templateUrl: './favoris-film.component.html',
  styleUrls: ['./favoris-film.component.css']
})
export class FavorisFilmComponent implements OnInit {

  @Input() filmId = '';

  favorits: string[] = [];
  films=[];
  constructor(private service: ServiceFilm) { }
  getImageFromServer(urlImg: string){
    
    const Img = "https://image.tmdb.org/t/p/w500/"+ urlImg;
    return Img;
  
}
  async ngOnInit(): Promise<void> {
    this.service.GetFavoris().subscribe((res: any) => {
     
      res.forEach((r:any) => {
        this.favorits.push(r.filmId);
        
      });
  })
  

  this.favorits.forEach((elt) =>{
    console.log(elt);
    
  })
  await new Promise(f => setTimeout(f, 2000));
  this.favorits.forEach(
    (id: any) => {
      console.log(id);
      this.service.getDetailFilm(id).subscribe((result: any) => {
        console.log(result)
        // @ts-ignore
        this.films.push(result)
        this.films.forEach(res => console.log(res)
        )
      })


    }
  );
}
  
}



// this.favorits.forEach((element:any) => {
  // console.log(element);
  //     this.service.getDetailFilm(element.filmId).subscribe((res)=>{
  //       console.log(res)
  //       // this.films.push(res)
  //   });

  // getALL(){
  //   this.favorits.forEach((elt) =>{
  //     console.log(elt);
  //   })

  // }

  


