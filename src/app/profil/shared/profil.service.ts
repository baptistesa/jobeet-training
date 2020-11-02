import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private baseUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // Get infos users
  getInfosUser() {
    return this.http.get(this.baseUrl + "users/" + localStorage.getItem("idUser"));
  }
}
