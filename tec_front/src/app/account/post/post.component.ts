import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [MessageService]
})
export class PostComponent implements OnInit {
  posts: any = []
  postCandidateForDeletionID: any;
  favoris: string[] = []
  postToConsult: any;
  constructor(private postService: PostService, private messageService: MessageService) {

  }
  ngOnInit(): void {
    const idUser = localStorage.getItem("idUser")
    if (idUser) {
      this.getAllPostsByUser(idUser)
      this.getAllFavorisIDs(idUser)
    }
  }

  getAllFavorisIDs(idUser: string) {
    this.postService.getFavorisIDsByUser(idUser).subscribe((resp) => {
      const isOK = resp.status === 200 || resp.status === 202
      if (isOK && resp.body) {
        this.favoris = resp.body
      }
    },
      (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue lors du chargement des annonces" })
      },
    )
  }

  getAllPostsByUser(idUser: string) {
    this.postService.getAllPostByUser(idUser).subscribe((resp) => {
      const isOK = resp.status === 200 || resp.status === 202
      if (isOK && resp.body) {
        this.posts = resp.body
      }
    },
      (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue lors du chargement des annonces" })
      },
    );
  }

  getCandidateForDeletion(id: string) {
    this.postCandidateForDeletionID = id
  }

  confirmDeletion() {
    this.postService.delete(this.postCandidateForDeletionID).subscribe((resp) => {

      if (resp.status === 200 || resp.status === 202) {
        this.messageService.add({ severity: 'info', summary: 'Supprimé', detail: "l'annonce a bien été supprimée" })
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      }
    },
      (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue lors de la suppression de l'annonce" })
      },
    );
  }

  toogleFavoris(id: string) {
    const param = {
      userID: localStorage.getItem("idUser"),
      postID: id
    }
    this.postService.toogleFavoris(param).subscribe((resp) => {

      if (resp.status === 200 || resp.status === 202) {
        this.favoris = resp.body
        this.messageService.add({ severity: 'success', summary: 'Favoris', detail: "mise à jour es favoris" })
      }
    },
      (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue" })
      },
    )
  }

  setPostToConsult(post: any) {
    this.postToConsult = post
  }

}
