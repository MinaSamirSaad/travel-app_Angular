import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { RatingModule } from "primeng/rating";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "../../card/card.component";
import { TripsService } from "../../../services/trips/trips.service";

@Component({
  selector: "app-slider",
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    CardComponent,
  ],
  providers: [TripsService],
  templateUrl: "./slider.component.html",
  styleUrl: "./slider.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {
  isTrip: boolean = true;
  trip: any;
  time: number = 200;
  constructor(private trips: TripsService) {}

  ngOnInit(): void {
    this.trips.getTrips().subscribe((data) => {
      this.trip = data.data.slice(0, 12);
      console.log(this.trip);
    });
  }

  responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
