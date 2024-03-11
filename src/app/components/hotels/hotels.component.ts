import { Component } from '@angular/core';
import {
  Router,
  RouterModule,
} from '@angular/router';

import { HotelsService } from '../../services/hotels/hotels.service';
import { TripsService } from '../../services/trips/trips.service';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [RouterModule],
  providers: [HotelsService],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
constructor(private hotelsService: HotelsService , private trips:TripsService , private router : Router) { }

hotels: any = [];
popularHotels: any = [];
hotelID: any ;
trip : any = [];
 check = (id : any) => {
   this.hotelID = id ;
   this.trips.getTrips().subscribe((data : any)=> {
     this.trip = data.data
     let filtered = this.trip.filter((tri : any) => {
       return tri.hotel.id === this.hotelID
     })
     this.router.navigate([`/trip/${filtered[0]._id}`])
   })
}

ngOnInit() {
  this.hotelsService.getHotels().subscribe((data:any) => {
    this.hotels = data.data
    this.popularHotels = this.hotels.filter((hotel : any)=> hotel.hotelRate === 5).slice(2,6)
  });

}
}
