import { Component, Input, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { RatingModule } from "primeng/rating";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    RatingModule,
  ],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input() trip!: any;
  @Input() isTrip!: boolean;
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log("Trip", this.trip);
  }
  showDetails(id: any) {
    this.router.navigate([`trip/${id}`]);
  }

  isHovered: boolean = false;
  isClicked: boolean = false;

  addedToFav() {
    console.log("added to fav");
  }

  toggleFavourite() {
    this.trip.favorite = !this.trip.favorite;
    this.trip.favorite;
  }
}
