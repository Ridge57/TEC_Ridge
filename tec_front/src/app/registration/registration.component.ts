import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { MenuItem, MessageService } from 'primeng/api';
import { UserService } from '../service/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [MessageService]
})
export class RegistrationComponent implements OnInit {
  password: string = "";
  cpassword: string = "";
  countries: any = []
  pays: string = ""
  indicatif: string = ""
  nom: string = ""
  prenom: string = ""
  email: string = ""
  date: any
  genre: string = ""
  phone: string = ""
  items: MenuItem[] = [];
  activeIndex: number = 0;
  languages: any = [];
  selectedLanguages: any = [];
  options: any;
  cities: any;
  ville: any;
  coordinates: any;

  constructor(
    private countryservice: CountryService,
    private messageService: MessageService,
    private userService: UserService,
    private cityService: CityService) {

  }



  ngOnInit(): void {
    this.countries = this.countryservice.countries;


    this.options = {
      center: { lat: 46.3167, lng: -0.4667 },
      zoom: 12,
      mapTypeId: 'roadmap',
      styles: [
        {
          featureType: "poi.business",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
      ],
    };

    this.languages = [
      { name: 'Allemand' },
      { name: 'Anglais' },
      { name: 'Chinois' },
      { name: 'Espagnol' },
      { name: 'Français' }
    ];
    this.items = [
      {
        label: 'infos'
      },
      {
        label: 'adresse'
      },
      {
        label: 'experience'
      },
      {
        label: 'photo'
      },
      {
        label: 'compte'
      }
    ];
  }


  previous() {
    this.activeIndex--;
  }

  next() {
    this.activeIndex++;
  }

  selectCity(event: any) {
    this.ville = event.target.value;
    this.cityService.getCoordinates(this.ville).subscribe((resp) => {

      if (resp.status === 200 || resp.status === 202) {
        this.coordinates = resp.body.features[0].geometry.coordinates
        new google.maps.Marker({ position: { lat: this.coordinates[1], lng: this.coordinates[0] }, title: "Konyaalti" })
      }
    },
      (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue lors de la réccupération des villes" })

      },
    );
  }


  selectCountry(event: any) {
    this.pays = event.target.value;
    this.indicatif = this.countries.find((elt: any) => elt.name === this.pays).phoneCode
    console.log(this.pays);
    console.log({ "country": this.pays });

    const p = { country: this.pays }

    this.cityService.findCities(JSON.stringify(p)).subscribe((resp) => {

      if (resp.status === 200 || resp.status === 202) {
        this.cities = resp.body
        console.log("****************");

        console.log(this.cities);

      }
    },
      (err: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue lors de la réccupération des villes" })

      },
    );
  }

  setNom(event: any) {
    this.nom = event.target.value;
  }

  setPrenom(event: any) {
    this.prenom = event.target.value;
  }

  setEmail(event: any) {
    this.email = event.target.value;
  }

  selectGenre(event: any) {
    this.genre = event.target.value;
  }
  setPhone(event: any) {
    this.phone = event.target.value;
  }

  setPassword(event: any) {
    this.password = event.target.value;
  }

  confirmPassword(event: any) {
    this.cpassword = event.target.value;
  }

  getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  onSave() {
    if (this.nom.trim() === "") {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: "Le champ nom est obligatoire" })
    } else if (this.prenom.trim() === "") {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: "Le champ prenom est obligatoire" })
    } else if (this.email.trim() === "") {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: "L'email est obligatoire" })
    } else if (this.genre === "") {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: 'Le genre est obligatoire' })
    } else if (this.pays === "") {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: 'Le pays de résidence est obligatoire' })
    } else if (this.phone.trim() === "") {
      this.messageService.add({ severity: 'warn', summary: 'Incomplet', detail: 'Le numéro de téléphone est obligatoire' })
    } else if (this.password.indexOf(' ') >= 0) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur mot de passe', detail: "les espaces sont interdits" })
    } else if (this.password.trim() === "") {
      this.messageService.add({ severity: 'warn', summary: 'Erreur mot de passe', detail: "Le mot de passe est obligatoire" })
    } else if (this.password !== this.cpassword) {
      this.messageService.add({ severity: 'warn', summary: 'Confirmation mot de passe', detail: "Les mots de passe ne correspondent pas" })
    } else {
      const user = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        genre: this.genre,
        pays: this.pays,
        telephone: this.indicatif + this.phone,
        password: this.password
      }

      this.userService.save(user).subscribe((resp) => {

        if (resp.status === 200 || resp.status === 202) {
          this.messageService.add({ severity: 'success', summary: 'Compte crée', detail: "Votre compte a bien été crée" })

        }
      },
        (err: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "une erreur est survenue lors de la création du compte" })

        },
      );
    }



  }


}
