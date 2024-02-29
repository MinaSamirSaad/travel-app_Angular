import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
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
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardComponent,
    RatingModule,
    HttpClientModule,
    FilterPipe,
  ],
  providers: [FilterService, TripsService],
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class CardsComponent {
  // search functionality
  trips: any;
  searchTerm: string = "";
  private subscription!: Subscription;
  constructor(
    private _FilterService: FilterService,
    private _TripsService: TripsService
  ) {
    this.subscription = this._FilterService.search$.subscribe({
      next: (term) => {
        this.searchTerm = term;
      },
    });
  }
  ngOnInit(): void {
    this._TripsService.getTrips().subscribe({
      next: ({ data }) => {
        this.trips = data;
        console.log(data);
      },
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  //end search functionality
  value: number = 3;
  isHovered: boolean = false;
  isClicked: boolean = false;

  addedToFav() {
    console.log("added to fav");
  }

  toggleFavourite() {
    this.isClicked = !this.isClicked;
    // Call addedToFav() method if you want to execute the function on click
    this.addedToFav();
  }
}
