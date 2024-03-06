import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';

import { HotelsService } from '../../services/hotels/hotels.service';
import { TripsService } from '../../services/trips/trips.service';

@Component({
  selector: "app-trip-details",
  standalone: true,
  imports: [
    CommonModule,
    RatingModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
  ],
  providers: [TripsService , HotelsService ],
  templateUrl: "./trip-details.component.html",
  styleUrl: "./trip-details.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class TripDetailsComponent {
  private router = inject(Router);
  constructor(
    private route: ActivatedRoute,
    private _TripsService: TripsService,
    private _HotelsService: HotelsService
  ) {}
  id: any;
  trip: any;
  value = 2;
  cities: any[] | undefined;
  hotelID : any;
  hotel : any;
  selectedCity: any | undefined;
  hotelData : any;  ngOnInit() {


    this.route.params.subscribe({
      next: (params) => {
        this.id = params["id"];
      },
    });

    this._TripsService.getTripById(this.id).subscribe({
      next: ({ data }) => {
        this.trip = data.trip;
        this.hotelID = data.trip.hotel.id
        console.log(this.hotelID)

        this._HotelsService.getHotel(this.hotelID).subscribe({
          next: (data) => {
            this.hotel = data
            this.hotelData = this.hotel.data.hotel
            console.log(this.hotelData)
          }
        })


      },
    });

  }
  goToBookingPage(id: any) {
    this.router.navigate([`pay/${id}`]).then(() => {
      window.location.reload();
    });
  }


  changeHotelImg(img : any){
    this.trip.imgUrl = img;
  }

}
