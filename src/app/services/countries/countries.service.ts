import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  private readonly URL_DB = "https://travel-app-8glz.onrender.com/countries";

  getCountries() {
    return this.http.get(this.URL_DB);
  }

  getCountry(id: number) {
    return this.http.get(`${this.URL_DB}/${id}`);
  }

  getCountryByName(name:any){
    return this.http.get(`${this.URL_DB}?countryName=${name}`);
  }

}
