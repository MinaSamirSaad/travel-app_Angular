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
  selectedCountry: string = "";
  filteredCountries: any;
  categories: any;
  selectedCategory: any;
  filterCountry(event: any) {}

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
  }
}
