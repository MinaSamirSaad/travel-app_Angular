import { Component } from '@angular/core';

import {
  ExoticPlacesComponent,
} from '../../components/home/exotic-places/exotic-places.component';
import {
  WhyChooseUsComponent,
} from '../../components/home/why-choose-us/why-choose-us.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ExoticPlacesComponent , WhyChooseUsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
