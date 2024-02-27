import { Component, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RatingModule } from "primeng/rating";
import { CommonModule } from "@angular/common";
import { DropdownModule } from "primeng/dropdown";

@Component({
  selector: "app-trip-details",
  standalone: true,
  imports: [CommonModule, RatingModule, FormsModule, DropdownModule],
  templateUrl: "./trip-details.component.html",
  styleUrl: "./trip-details.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class TripDetailsComponent {
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
