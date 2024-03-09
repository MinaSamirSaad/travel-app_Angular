import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';

import { HotelsService } from '../../services/hotels/hotels.service';
import { TripsService } from '../../services/trips/trips.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: "app-card",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    RatingModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  @Input() trip!: any;
  @Input() isTrip!: boolean;
  @Input() isBook: boolean = true;
  hotel : any ;
  rate : number = 4;
  constructor(
    private router: Router,
    private _TripsService: TripsService,
    private _UserService: UserService,
    private messageService: MessageService,
    private _hotelService: HotelsService
  ) {}
  ngOnInit(): void {
    let locStrg = JSON.parse(localStorage.getItem("favouriteTrips") || "[]");
    let findTrip = locStrg.find((fav: any) => fav._id == this.trip._id);
    if (findTrip) this.trip = findTrip;
    this._hotelService.getHotel(this.trip.hotel.id).subscribe((data : any)=> {
      this.hotel = data.data.hotel
      this.rate = this.hotel.hotelRate
    })
  }
  showDetails(id: any) {
    this.router.navigate([`trip/${id}`]);
  }
  goToBookingPage(id: any) {
    this.router.navigate([`pay/${id}`]).then(() => {
      window.location.reload();
    });
  }

  isHovered: boolean = false;
  isClicked: boolean = false;

  addedToFav() {
    console.log("added to fav");
  }
  showBottomCenter() {
    this.messageService.add({
      key: "bc",
      severity: "Faild",
      summary: "Faild",
      detail: "You must login first to add this trip to your favorite list.",
    });
  }
  toggleFavourite() {
    // get from local
    if (localStorage.getItem("isLoggedIn")) {
      let locStrg = JSON.parse(localStorage.getItem("favouriteTrips") || "[]");
      // find
      let foundTripInLocalStrg = locStrg.find(
        (favTrip: any) => this.trip._id == favTrip._id
      );

      if (!foundTripInLocalStrg) {
        this.trip.isFavourite = true;
        locStrg.push(this.trip);
        localStorage.setItem("favouriteTrips", JSON.stringify(locStrg));
      } else {
        this.trip.isFavourite = false;
        locStrg = locStrg.filter((fav: any) => {
          return fav._id != this.trip._id;
        });

        localStorage.setItem("favouriteTrips", JSON.stringify(locStrg));
        this._TripsService.toggleFavoriteEvent.emit(this.trip);
      }

      this._TripsService.favoriteTripsCount.next(locStrg.length);
    } else {
      this.showBottomCenter();
    }
  }
}
