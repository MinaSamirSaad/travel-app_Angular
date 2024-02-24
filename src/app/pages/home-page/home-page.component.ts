import { CarouselComponent } from "../../components/home/carousel/carousel.component";
import { HeaderComponent } from "./../../components/home/header/header.component";
import { Component } from "@angular/core";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [HeaderComponent, CarouselComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.css",
})
export class HomePageComponent {}
