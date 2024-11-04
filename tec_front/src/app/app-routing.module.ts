import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccountComponent } from './account/account.component';
import { PostComponent } from './account/post/post.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FavorisComponent } from './account/favoris/favoris.component';
import { MessageComponent } from './account/message/message.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'account', component: AccountComponent },
  { path: 'annonces', component: PostComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'messages', component: MessageComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
