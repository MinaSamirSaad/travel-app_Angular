import { CommonModule } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';

import {
  HeaderComponent,
} from '../../../components/home/header/header.component';
import {
  CardsComponent,
} from '../../../components/tours/cards/cards.component';
import {
  FilterComponent,
} from '../../../components/tours/filter/filter/filter.component';

@Component({
  selector: 'app-tours-page',
  standalone: true,
  imports: [HeaderComponent , CommonModule , RatingModule , FormsModule  , CardModule , ButtonModule , CardsComponent , FilterComponent],
  templateUrl: './tours-page.component.html',
  styleUrl: './tours-page.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class ToursPageComponent {


}
