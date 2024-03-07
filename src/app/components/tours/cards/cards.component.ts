import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
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
  trips!: any;
  isTrip: boolean = true;
  category: string = "";
  searchTerm: string = "";
  private subscription!: Subscription;
  private categorySubscription!: Subscription;
  constructor(
    private _TripsService: TripsService,
    private _FilterService: FilterService
  ) {}

  ngOnInit(): void {
    // if (!localStorage.getItem("favouriteTrips"))
    //   localStorage.setItem("favouriteTrips", "[]");
    this.subscription = this._TripsService.search.subscribe({
      next: (term) => {
        console.log({ term });
        this.searchTerm = term;
      },
    });
    this.categorySubscription = this._TripsService.category.subscribe({
      next: (category: any) => {
        console.log({ category });
        this.category = category.code;
      },
    });
    // ------------------
    this._TripsService.getTrips().subscribe({
      next: ({ data }) => {
        this.trips = data;
      },
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }
}
