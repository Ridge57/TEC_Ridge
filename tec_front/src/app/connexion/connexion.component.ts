import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  providers: [MessageService]
})
export class ConnexionComponent implements OnInit {

  constructor(private userService: UserService,
    private messageService: MessageService,
    private router: Router) {

  }
  ngOnInit(): void {

  }
  email: string = ""
  password: string = ""

  setEmail(event: any) {
    this.email = event.target.value;
  }


  setPassword(event: any) {
    this.password = event.target.value;
  }

  signin() {
    if (this.email.trim() === "") {
      this.messageService.add({ severity: 'warn', detail: "Saisir un email" })
    } else if (this.password.trim() === "") {
      this.messageService.add({ severity: 'warn', detail: "Saisir le mot de passe" })
    } else {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.userService.connexion(payload).subscribe((resp) => {
        const isOK = resp.status === 200 || resp.status === 202

        if (!resp.body) {
          this.messageService.add({ severity: 'error', summary: 'identifiants invalides' })
        }

        if (isOK && resp.body) {
          console.log(resp);

          localStorage.setItem("idUser", resp.body.id)
          localStorage.setItem("prenom", resp.body.prenom)
          this.messageService.add({ severity: 'success', summary: 'Connecté' })
          setTimeout(() => {
            this.router.navigate(['/home'])
          }, 1000)

        }

      },
        (err: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue" })
        },
      );
    }

  }
}
