import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TripsService {
  constructor(private http: HttpClient) {}
  getTrips(): Observable<any> {
    return this.http.get<any>("https://travel-app-8glz.onrender.com/trips");
  }
  getTripById(id: string): Observable<any> {
    return this.http.get<any>(
      `https://travel-app-8glz.onrender.com/trips/${id}`
    );
  }
  getHotels(): Observable<any> {
    return this.http.get<any>("https://travel-app-8glz.onrender.com/hotels");
  }
  getCountries(): Observable<any> {
    return this.http.get<any>("https://travel-app-8glz.onrender.com/hotels");
  }
}
