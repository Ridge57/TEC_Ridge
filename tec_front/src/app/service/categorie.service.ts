import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient, private hostService: HostService) { }

  getAll() {
    //const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("accessToken"))
    //return this.http.get(this.hostServ.host + "/irritants", { headers })
    return this.http.get(this.hostService.host + "/categories")
  }
}
