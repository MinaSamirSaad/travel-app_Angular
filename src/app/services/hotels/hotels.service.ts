import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }
  private readonly URL_DB = "https://travel-app-8glz.onrender.com/hotels";

  getHotels() {
    return this.http.get(this.URL_DB);
  }

  getHotel(id: number) {
    return this.http.get(`${this.URL_DB}/${id}`);
  }

}
