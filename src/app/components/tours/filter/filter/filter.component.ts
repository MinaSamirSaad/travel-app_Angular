import { TripsService } from "./../../../../services/trips/trips.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AutoCompleteModule } from "primeng/autocomplete";
import { DropdownModule } from "primeng/dropdown";
@Component({
  selector: "app-filter",
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, DropdownModule],
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent implements OnInit {
  cities: any[] | undefined;
  selectedCity: any | undefined = "";

  constructor(private _TripsService: TripsService) {}
  ngOnInit() {
    this.cities = [
      { name: "Domestic", code: "domestic" },
      { name: "Outgoing", code: "outgoing" },
      { name: "Honeymoon", code: "Honeymoon" },
      { name: "Nile cruise", code: "nile cruise" },
    ];
  }

  // search functionality

  searchTerm: string = "";
  sendSearch() {
    this._TripsService.search.next(this.searchTerm);
    if (!this.selectedCity) this._TripsService.category.next("");
    else this._TripsService.category.next(this.selectedCity);
  }
}
