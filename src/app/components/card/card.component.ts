import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule ,FormsModule , ButtonModule , CardModule , RatingModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class CardComponent {
  trip: any = {
    name:"Honeymoon",
    price: "48180 LE",
    rate:3,
    details:"Flamingo Beach Hotel.",
    duration:"6 days / 5 nights",
    favorite: false,
    img:"https://www.skyegtours.com/en/admin/uploaded/offers/shutterstock_2064277223-1-1-1-800x534.jpg"

  }
  isHovered: boolean = false;
  isClicked: boolean = false;

  addedToFav() {
    console.log("added to fav");
  }

  toggleFavourite() {
    this.trip.favorite = !this.trip.favorite;
    this.trip.favorite;
  }

}
