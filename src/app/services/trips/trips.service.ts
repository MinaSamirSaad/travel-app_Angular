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
  public category = new BehaviorSubject<string>("");
  //favourite count
  public favoriteTripsCount = new BehaviorSubject<number>(0);

  get favoriteTripsCount$() {
    return this.favoriteTripsCount.asObservable();
  }
  getTrips(): Observable<any> {
    return this.http.get<any>("https://travel-app-8glz.onrender.com/trips");
  }
  getTripById(id: number): Observable<any> {
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
  bookTrip(id: number) {
    return this.http.get<any>(
      `https://travel-app-8glz.onrender.com/trips/book/${id}`
    );
  }
  //review
  reviews: any[] = [
    {
      name: "mounir",
      rating: 3,
      desc: "lorem lorem lorem loremlorem loremlorem lorem",
    },
    {
      name: "samir",
      rating: 2,
      desc: "lorem lorem lorem loremlorem loremlorem lorem",
    },
    {
      name: "ahmed",
      rating: 4,
      desc: "lorem lorem lorem loremlorem loremlorem lorem",
    },
    {
      name: "bayo",
      rating: 5,
      desc: "lorem lorem lorem loremlorem loremlorem lorem",
    },
  ];

  addReview(data: any) {
    this.reviews.push(data);
  }

  review(data: any) {
    return this.http.post(
      `https://travel-app-8glz.onrender.com/reviews/addReview`,
      data
    );
  }
}
