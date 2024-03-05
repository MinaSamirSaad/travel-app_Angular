import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from "@angular/router";

import { HotelsComponent } from "./components/hotels/hotels.component";
import { OfferComponent } from "./components/offer/offer.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { CountriesComponent } from "./pages/countries-page/countries/countries.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { RegisterComponent } from "./components/register/register.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { PayPageComponent } from "./pages/pay-page/pay-page.component";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { SystemLayoutComponent } from "./layout/system-layout/system-layout.component";
import { HeaderComponent } from "./components/home/header/header.component";
import { FooterComponent } from "./components/app-footer2/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { filter } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    OfferComponent,
    ReviewsComponent,
    HotelsComponent,
    CountriesComponent,
    RegisterPageComponent,
    PayPageComponent,
    AuthLayoutComponent,
    SystemLayoutComponent,
    ContactComponent,
    ErrorPageComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  title = "travel-app_Angular";
  showNavbar: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !this.isNavbarHidden(this.activatedRoute);
        console.log(this.showNavbar);
      }
    });
  }

  isNavbarHidden(activatedRoute: ActivatedRoute): boolean {
    return activatedRoute.firstChild?.snapshot.data["hideNavbar"];
  }
}
