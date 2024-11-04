import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HostService } from './host.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private hostService: HostService) { }

  poster(payload: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.hostService.host + "/post", payload, { observe: 'response' })
  }

  getAllPostByUser(idUser: any): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.hostService.host + "/users/" + idUser + "/posts", { observe: 'response' })
  }

  delete(idPost: any): Observable<HttpResponse<any>> {
    return this.http.delete<any>(this.hostService.host + "/posts/" + idPost, { observe: 'response' })
  }

  toogleFavoris(param: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.hostService.host + "/toogleFavoris", param, { observe: 'response' })
  }

  getFavorisIDsByUser(idUser: any): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.hostService.host + "/getFavorisIdsByUser/" + idUser, { observe: 'response' })
  }

  getFavorisPostsByUser(idUser: any): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.hostService.host + "/getFavorisPostsByUser/" + idUser, { observe: 'response' })
  }
}
