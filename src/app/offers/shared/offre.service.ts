import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private baseUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // Get all offers
  getOffers() {
    return this.http.get(this.baseUrl + "offers/getAll");
  }

  // Get one offer
  getOneOffer(id) {
    return this.http.get(this.baseUrl + "offers/get/" + id);
  }
}
