import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";

import { HeaderComponent } from "../../../components/home/header/header.component";
import { CardsComponent } from "../../../components/tours/cards/cards.component";
import { FilterComponent } from "../../../components/tours/filter/filter/filter.component";
@Component({
  selector: "app-tours-page",
  standalone: true,
  imports: [HeaderComponent, CommonModule, CardsComponent, FilterComponent],
  templateUrl: "./tours-page.component.html",
  styleUrl: "./tours-page.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class ToursPageComponent {}
