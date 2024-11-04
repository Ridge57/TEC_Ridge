import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../service/categorie.service';
import { MessageService } from 'primeng/api';
import { PostService } from '../service/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {
  connectedUser: any = localStorage.getItem("idUser")
  prenom: any = localStorage.getItem("prenom")
  categories: any = [];
  type: any;
  categorie: any;
  titre: any;
  description: any;
  constructor(
    private router: Router,
    private categorieService: CategorieService,
    private messageService: MessageService,
    private postService: PostService
  ) {

  }
  ngOnInit(): void {

  }

  initModal() {
    this.categories = this.categorieService.getAll().subscribe(data => {
      this.categories = data;
      console.log(data);

    })
  }

  goToMessages() {
    if (this.connectedUser) {
      this.router.navigate(['/messages'])
    } else {
      this.router.navigate(['/connexion'])
    }
  }

  goToFavoris() {
    if (this.connectedUser) {
      this.router.navigate(['/favoris'])
    } else {
      this.router.navigate(['/connexion'])
    }
  }


  selectType(event: any) {
    this.type = event.target.value;
  }


  selectCategorie(event: any) {
    this.categorie = event.target.value;
  }
  setDescription(event: any) {
    this.description = event.target.value;
  }

  setTitre(event: any) {
    this.titre = event.target.value;
  }

  save() {
    if (!this.type) {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: "Le type d'annonce est obligatoire" })
    } else if (!this.categorie) {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: "La catégorie est obligatoire" })
    } else if (this.titre.trim() === "") {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: "Le titre est obligatoire" })
    } else if (this.description.trim() === "") {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: 'La description est obligatoire' })
    } else {
      const post = {
        type: this.type,
        categorie: {
          id: this.categorie
        },
        titre: this.titre,
        description: this.description,
        owner: this.connectedUser
      }
      console.log(post);


      this.postService.poster(post).subscribe((resp) => {

        if (resp.status === 200 || resp.status === 202) {
          this.messageService.add({ severity: 'success', summary: 'Publiée', detail: "Votre annonce a été publiée" })
          setTimeout(() => {
            this.router.navigate(['/home'])
          }, 1000)

        }
      },
        (err: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue lors de la création du compte" })

        },
      );
    }



  }


  deconnexion() {
    localStorage.removeItem("idUser")
    localStorage.removeItem("prenom")
    setTimeout(() => {
      location.reload();
    }, 1000)
  }


}
