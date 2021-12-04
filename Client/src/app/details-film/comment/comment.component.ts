import { Component, Input, OnInit } from '@angular/core';
import { ServiceFilm } from "../../Service/service-film.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() filmId = '';

  comments: any;

  constructor(private service: ServiceFilm) { }

  ngOnInit(): void {
    this.service.GetCommentaire(this.filmId).subscribe((res: any) => {
      this.comments = res.comm;
    },
    
    )
  }

  addComment(comment: string) {
    
    this.service.AddCommentaire(this.filmId, comment).
      subscribe((res: any) =>

        console.log("comment server respond = " + res)

      )
    
    alert("ajouter commentaire")
  }
  
}
