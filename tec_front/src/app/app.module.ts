import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccountComponent } from './account/account.component';
import { SidebarComponent } from './account/sidebar/sidebar.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PostComponent } from './account/post/post.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FavorisComponent } from './account/favoris/favoris.component';
import { StepsModule } from 'primeng/steps';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MessageComponent } from './account/message/message.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { GMapModule } from 'primeng/gmap';

registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    NavbarComponent,
    ConnexionComponent,
    AccountComponent,
    SidebarComponent,
    WelcomeComponent,
    PostComponent,
    FavorisComponent,
    PagenotfoundComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MultiSelectModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    StepsModule,
    GMapModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
