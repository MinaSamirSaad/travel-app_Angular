import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { RatingModule } from "primeng/rating";
import { Router } from "@angular/router";
import { TripsService } from "../../services/trips/trips.service";

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
export class CardComponent implements OnInit {
  @Input() trip!: any;
  @Input() isTrip!: boolean;
  constructor(private router: Router, private _TripsService: TripsService) {}
  ngOnInit(): void {
    let locStrg = JSON.parse(localStorage.getItem("favouriteTrips") || "[]");
    let findTrip = locStrg.find((fav: any) => fav._id == this.trip._id);
    // console.log(findTrip);
    if (findTrip) this.trip = findTrip;
  }
  showDetails(id: any) {
    this.router.navigate([`trip/${id}`]);
  }
  goToBookingPage(id: any) {
    this.router.navigate([`pay/${id}`])
  .then(() => {
    window.location.reload();
  });
  }

  isHovered: boolean = false;
  isClicked: boolean = false;

  addedToFav() {
    console.log("added to fav");
  }

  toggleFavourite() {
    // get from local
    let locStrg = JSON.parse(localStorage.getItem("favouriteTrips") || "[]");
    // find
    let foundTripInLocalStrg = locStrg.find(
      (favTrip: any) => this.trip._id == favTrip._id
    );

    if (!foundTripInLocalStrg) {
      this.trip.isFavourite = true;
      locStrg.push(this.trip);
      localStorage.setItem("favouriteTrips", JSON.stringify(locStrg));
    } else {
      this.trip.isFavourite = false;
      locStrg = locStrg.filter((fav: any) => {
        return fav._id != this.trip._id;
      });

      localStorage.setItem("favouriteTrips", JSON.stringify(locStrg));
      this._TripsService.toggleFavoriteEvent.emit(this.trip);
    }
  }
}
