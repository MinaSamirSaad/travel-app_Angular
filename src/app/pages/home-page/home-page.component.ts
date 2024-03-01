import { Component } from "@angular/core";

import { CarouselComponent } from "../../components/home/carousel/carousel.component";
import { ExoticPlacesComponent } from "../../components/home/exotic-places/exotic-places.component";
import { WhyChooseUsComponent } from "../../components/home/why-choose-us/why-choose-us.component";
import { SliderComponent } from "../../components/home/slider/slider.component";
import { OfferComponent } from "../../components/offer/offer.component";
import { HotelsComponent } from "../../components/hotels/hotels.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    CarouselComponent,
    ExoticPlacesComponent,
    WhyChooseUsComponent,
    SliderComponent,
    OfferComponent,
    HotelsComponent,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {}
