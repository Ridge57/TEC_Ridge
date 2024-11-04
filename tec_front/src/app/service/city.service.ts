import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient, private hostService: HostService) { }

  findCities(payload: any): Observable<HttpResponse<any>> {
    return this.http.post<any>("https://countriesnow.space/api/v0.1/countries/cities", payload, { observe: 'response' })
  }

  getCoordinates(city: any): Observable<HttpResponse<any>> {
    return this.http.get<any>("https://api-adresse.data.gouv.fr/search/?q=" + city + "&limit=1", { observe: 'response' })
  }
}
