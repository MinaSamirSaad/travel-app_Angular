import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CardComponent } from "../../../components/card/card.component";
import { CountriesService } from "../../../services/countries/countries.service";
import { HotelsService } from "../../../services/hotels/hotels.service";
import { TripsService } from "../../../services/trips/trips.service";
import { LoadingComponent } from "../../../components/loading/loading.component";

@Component({
  selector: "app-one-country",
  standalone: true,
  imports: [HttpClientModule, CardComponent, LoadingComponent],
  providers: [CountriesService, HotelsService, TripsService],
  templateUrl: "./one-country.component.html",
  styleUrl: "./one-country.component.css",
})
export class OneCountryComponent implements OnInit {
  tripsData: any = [];
  constructor(
    private route: ActivatedRoute,
    private CountriesService: CountriesService,
    private TripsService: TripsService
  ) {}
  countryName: any;
  filterdTrips: any = [];
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.params.subscribe({
      next: (params) => {
        this.CountriesService.getCountryByName(params).subscribe({
          next: (data) => {
          },
        });
        this.TripsService.getTrips().subscribe({
          next: (data) => {
            this.tripsData = data.data;
            this.countryName = params["id"];
            this.filterdTrips = this.tripsData.filter(
              (trip: any) => trip.name === this.countryName
            );
          },
        });
      },
    });
  }
}
