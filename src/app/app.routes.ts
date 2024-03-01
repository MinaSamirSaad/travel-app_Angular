import { Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { OfferComponent } from "./components/offer/offer.component";
import { CountriesComponent } from "./pages/countries-page/countries/countries.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ToursPageComponent } from "./pages/tours-page/tours-page/tours-page.component";
import { TripDetailsComponent } from "./components/trip-details/trip-details.component";
import { FavoriteTripsComponent } from "./pages/favorite-trips/favorite-trips.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "tours", component: ToursPageComponent },
  { path: "offer", component: OfferComponent },
  { path: "countries", component: CountriesComponent },
  { path: "trip/:id", component: TripDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomePageComponent },
  { path: "favourite", component: FavoriteTripsComponent },
];
