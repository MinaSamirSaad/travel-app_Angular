import { Routes } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import {
  TripDetailsComponent,
} from './components/trip-details/trip-details.component';
import {
  CountriesComponent,
} from './pages/countries-page/countries/countries.component';
import {
  DomesticComponent,
} from './pages/domestic-page/domestic/domestic.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
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
  { path: "home", component: HomePageComponent, data: { hideNavbar: false } },
  { path: "tours", component: ToursPageComponent, data: { hideNavbar: false } },
  { path: "domestic", component: DomesticComponent, data: { hideNavbar: false } },
  {
    path: "countries",
    component: CountriesComponent,
    data: { hideNavbar: false },
  },
  {
    path: "trip/:id",
    component: TripDetailsComponent,
    data: { hideNavbar: false, bgNav: true },
  },
  { path: "login", component: LoginComponent, data: { hideNavbar: true } },
  {
    path: "register",
    component: RegisterPageComponent,
    data: { hideNavbar: true },
  },
  { path: "pay/:id", component: PayPageComponent, data: { hideNavbar: true } },
  { path: "home", component: HomePageComponent, data: { hideNavbar: false } },
  {
    path: "favourite",
    component: FavoriteTripsComponent,
    data: { hideNavbar: false },
  },
  { path: "countries/:id", component: OneCountryComponent},
  { path: "domestic/:id", component: OneCountryComponent},

  { path: "contact", component: ContactComponent, data: { hideNavbar: true } },
  { path: "**", component: ErrorPageComponent, data: { hideNavbar: true } }
];
