import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://localhost:3000/users/";

  constructor(private http : HttpClient) { }

  // Login to Jobeet
  login(body) {
    return this.http.post(this.baseUrl + "login", body);
  }

  // Signup to Jobeet
  signup(body) {
    return this.http.post(this.baseUrl + "signup", body);
  }
}
