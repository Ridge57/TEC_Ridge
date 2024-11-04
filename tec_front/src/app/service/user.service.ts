import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private hostService: HostService) { }

  save(user: any): Observable<HttpResponse<any>> {
    //const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("accessToken"))
    //return this.http.get(this.hostServ.host + "/irritants", { headers })
    return this.http.post<any>(this.hostService.host + "/user", user, { observe: 'response' })
  }

  connexion(payload: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.hostService.host + "/connexion", payload, { observe: 'response' })
  }
}
