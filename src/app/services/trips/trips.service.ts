import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TripsService {
  toggleFavoriteEvent = new EventEmitter<any>();
  constructor(private http: HttpClient) {}
  // search in trip page
  public search = new BehaviorSubject<string>("");
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
