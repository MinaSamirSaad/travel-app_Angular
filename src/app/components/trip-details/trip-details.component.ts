import { Component, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RatingModule } from "primeng/rating";
import { CommonModule } from "@angular/common";
import { DropdownModule } from "primeng/dropdown";
import { ActivatedRoute } from "@angular/router";
import { TripsService } from "../../services/trips/trips.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-trip-details",
  standalone: true,
  imports: [
    CommonModule,
    RatingModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
  ],
  providers: [TripsService],
  templateUrl: "./trip-details.component.html",
  styleUrl: "./trip-details.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class TripDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private _TripsService: TripsService
  ) {}
  id: any;
  trip: any;
  value = 2;
  cities: any[] | undefined;

  selectedCity: any | undefined;

  ngOnInit() {
    this.cities = [
      { name: "Domestic", code: "domestic" },
      { name: "Outgoing", code: "outgoing" },
      { name: "Honeymoon", code: "honeymoon" },
      { name: "Nile cruise", code: "nileCruise" },
    ];

    this.route.params.subscribe({
      next: (params) => {
        this.id = params["id"];
      },
    });
    this._TripsService.getTripById(this.id).subscribe({
      next: ({ data }) => {
        this.trip = data;
        console.log(this.trip);
      },
    });
  }
}
