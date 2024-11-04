import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css'],
  providers: [MessageService]
})
export class FavorisComponent implements OnInit {

  idUser: any = localStorage.getItem('idUser')
  posts: any;
  postToConsult: any;
  constructor(private postService: PostService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.initPosts(this.idUser)
  }

  initPosts(idUser: string) {
    if (idUser) {
      this.postService.getFavorisPostsByUser(idUser).subscribe((resp) => {

        if (resp.status === 200 || resp.status === 202) {
          this.posts = resp.body
        }
      },
        (err: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue lors du chargement des favoris" })
        },
      )
    }

  }

  setPostToConsult(post: any) {
    this.postToConsult = post
  }


  toogleFavoris(id: string) {
    const param = {
      userID: localStorage.getItem("idUser"),
      postID: id
    }
    this.postService.toogleFavoris(param).subscribe((resp) => {

      if (resp.status === 200 || resp.status === 202) {
        this.messageService.add({ severity: 'success', summary: 'Favoris', detail: "mise à jour es favoris" })
        this.initPosts(this.idUser)
      }
    },
      (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue" })
      },
    )
  }

}


