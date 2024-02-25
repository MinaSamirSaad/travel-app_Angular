import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { FooterComponent } from "./components/app-footer2/footer/footer.component";
import { OfferComponent } from "./components/offer/offer.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    FooterComponent,
    OfferComponent,
    ReviewsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "travel-app_Angular";
}
