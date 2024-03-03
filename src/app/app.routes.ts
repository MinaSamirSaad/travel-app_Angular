
import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { OfferComponent } from './components/offer/offer.component';
import {
  TripDetailsComponent,
} from './components/trip-details/trip-details.component';
import {
  CountriesComponent,
} from './pages/countries-page/countries/countries.component';
import {
  FavoriteTripsComponent,
} from './pages/favorite-trips/favorite-trips.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {
  OneCountryComponent,
} from './pages/one-country/one-country/one-country.component';
import { PayPageComponent } from './pages/pay-page/pay-page.component';
import {
  RegisterPageComponent,
} from './pages/register-page/register-page.component';
import {
  ToursPageComponent,
} from './pages/tours-page/tours-page/tours-page.component';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "tours", component: ToursPageComponent },
  { path: "offer", component: OfferComponent },
  { path: "countries", component: CountriesComponent},
  { path: "country/:id", component: OneCountryComponent},
  { path: "trip/:id", component: TripDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterPageComponent },
  { path: "pay/:id", component: PayPageComponent },
  { path: "home", component: HomePageComponent },
  { path: "favourite", component: FavoriteTripsComponent },
  // { path: "contact", component: ContactComponent },
  // { path: "**", component: ErrorPageComponent },
];
