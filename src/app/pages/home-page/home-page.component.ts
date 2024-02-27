import { Component } from "@angular/core";

import { CarouselComponent } from "../../components/home/carousel/carousel.component";
import { ExoticPlacesComponent } from "../../components/home/exotic-places/exotic-places.component";
import { HeaderComponent } from "../../components/home/header/header.component";
import { WhyChooseUsComponent } from "../../components/home/why-choose-us/why-choose-us.component";
import { SliderComponent } from "../../components/home/slider/slider.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    HeaderComponent,
    CarouselComponent,
    ExoticPlacesComponent,
    WhyChooseUsComponent,
    SliderComponent,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {}
