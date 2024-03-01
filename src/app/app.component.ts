import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  FooterComponent,
} from './components/app-footer2/footer/footer.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { OfferComponent } from './components/offer/offer.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import {
  CountriesComponent,
} from './pages/countries-page/countries/countries.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PayPageComponent } from './pages/pay-page/pay-page.component';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    OfferComponent,
    ReviewsComponent,
    HotelsComponent,
    CountriesComponent,
    RegisterPageComponent,
    PayPageComponent

  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "travel-app_Angular";
}
