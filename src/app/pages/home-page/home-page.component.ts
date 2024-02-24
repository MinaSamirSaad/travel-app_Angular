import { Component } from '@angular/core';

import {
  ExoticPlacesComponent,
} from '../../components/home/exotic-places/exotic-places.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ExoticPlacesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
