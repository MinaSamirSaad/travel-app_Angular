import { CommonModule } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule ,FormsModule , ButtonModule , CardModule , RatingModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CardsComponent {
  value: number = 3;
  isHovered: boolean = false;
  isClicked: boolean = false;

  addedToFav() {
    console.log("added to fav");
  }

  toggleFavourite() {
    this.isClicked = !this.isClicked;
    // Call addedToFav() method if you want to execute the function on click
    this.addedToFav();
  }
}
