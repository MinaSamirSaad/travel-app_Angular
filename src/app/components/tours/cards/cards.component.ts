import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from "primeng/button";
import { RatingModule } from "primeng/rating";
import { Subscription } from "rxjs";
import { FilterService } from "../../../services/trips/filter.service";
import { TripsService } from "../../../services/trips/trips.service";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from "../../../pipes/filter.pipe";
import { CardComponent } from "../../card/card.component";

@Component({
  selector: "app-cards",
  standalone: true,
  imports: [CommonModule, CardComponent, HttpClientModule, FilterPipe],
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class CardsComponent implements OnInit {
  // search functionality
  trips: any;
  searchTerm: string = "";
  private subscription!: Subscription;
  constructor(private _TripsService: TripsService) {}

  ngOnInit(): void {
    if (!localStorage.getItem("favouriteTrips"))
      localStorage.setItem("favouriteTrips", "[]");
    this.subscription = this._TripsService.search.subscribe({
      next: (term) => {
        console.log({ term });
        this.searchTerm = term;
      },
    });
    // ------------------
    this._TripsService.getTrips().subscribe({
      next: ({ data }) => {
        this.trips = data.slice(0, 9);
      },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
