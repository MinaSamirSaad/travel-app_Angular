import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, inject, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { DropdownModule } from "primeng/dropdown";
import { RatingModule } from "primeng/rating";

import { HotelsService } from "../../services/hotels/hotels.service";
import { TripsService } from "../../services/trips/trips.service";
import { CardComponent } from "../card/card.component";
import { ReviewItemComponent } from "./review-item/review-item.component";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: "app-trip-details",
  standalone: true,
  imports: [
    CommonModule,
    RatingModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    CardComponent,
    ReviewItemComponent,
    LoadingComponent,
    ToastModule,
  ],
  providers: [HotelsService, MessageService],
  templateUrl: "./trip-details.component.html",
  styleUrl: "./trip-details.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class TripDetailsComponent {
  private router = inject(Router);
  constructor(
    private route: ActivatedRoute,
    private _TripsService: TripsService,
    private _HotelsService: HotelsService,
    private messageService: MessageService
  ) {}
  id: any;
  trip: any;
  rateValue = 2;
  reviewValue: string = "";
  cities: any[] | undefined;
  hotelID: any;
  hotel: any;
  selectedCity: any | undefined;
  crusieData: any;
  hotelData: any;
  hovered = false;
  reviews: any[] = [];
  hasSubmittedReview: boolean = false;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe({
      next: (params) => {
        this.id = params["id"];
      },
    });

    this.reloadPage();
    // this.reviews = this._TripsService.reviews;
  }
  reloadPage() {
    this._TripsService.getTripById(this.id).subscribe({
      next: ({ data }) => {
        this.reviews = data.reviews;
        this.trip = data.trip;
        this.hotelID = data.trip.hotel.id;
        this.crusieData = data.trip.crusie;
        this.hotelData = data.hotelData[0];
      },
    });
  }
  goToBookingPage(id: any) {
    this.router.navigate([`pay/${id}`]).then(() => {
      window.location.reload();
    });
  }

  changeHotelImg(img: any) {
    this.trip.imgUrl = img;
  }

  // review
  showBottomCenter(msg: string, state: string) {
    this.messageService.add({
      key: "bc",
      severity: state,
      summary: state,
      detail: msg,
    });
  }
  addReview() {
    if (localStorage.getItem("isLoggedIn")) {
      if (this.reviewValue) {
        // let name = "";

        // if (
        //   localStorage.getItem("provider") &&
        //   localStorage.getItem("provider") === "google"
        // ) {
        //   name = JSON.parse(localStorage.getItem("user")!).name;
        // } else {
        //   name = JSON.parse(localStorage.getItem("user")!).userName;
        //   // this.userPicture = JSON.parse(localStorage.getItem("user")!).image;
        // }

        // this._TripsService.addReview({
        //   name,
        //   rating: this.rateValue,
        //   desc: this.reviewValue,
        // });
        this._TripsService
          .review({
            review: this.reviewValue,
            rate: this.rateValue,
            reviewTrip: this.id,
          })
          .subscribe({
            next: (data) => {
              this.showBottomCenter("Review added successfully", "success");
              this.hasSubmittedReview = true;
              this.reloadPage();
            },
            error: (err) => {
              console.log(err);
            },
          });
      } else {
        this.showBottomCenter("You must write a review first", "warn");
      }
    } else {
      this.showBottomCenter(
        "You must login first and then add your review",
        "warn"
      );
    }
  }
}
