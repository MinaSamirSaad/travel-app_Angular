import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient) { }
  private readonly URL_DB = "https://travel-app-8glz.onrender.com/trips";

  getTrips() {
    return this.http.get(this.URL_DB);
  }

  getTrip(id: number) {
    return this.http.get(`${this.URL_DB}/${id}`);
  }
}
