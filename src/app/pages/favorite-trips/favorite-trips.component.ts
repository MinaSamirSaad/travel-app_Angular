import { Component } from "@angular/core";
import { CardComponent } from "../../components/card/card.component";
import { Subscription } from "rxjs";
import { TripsService } from "../../services/trips/trips.service";

@Component({
  selector: "app-favorite-trips",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./favorite-trips.component.html",
  styleUrl: "./favorite-trips.component.css",
})
export class FavoriteTripsComponent {
  // search functionality
  trips: any;
  toggleFavoriteSubscription!: Subscription;
  constructor(private _TripsService: TripsService) {}
  ngOnInit(): void {
    this.trips = JSON.parse(localStorage.getItem("favouriteTrips") || "[]");
    this.toggleFavoriteSubscription =
      this._TripsService.toggleFavoriteEvent.subscribe((trip: any) => {
        this.trips = this.trips.filter((t: any) => t._id !== trip._id);
        localStorage.setItem("favouriteTrips", JSON.stringify(this.trips));
      });
  }
}
