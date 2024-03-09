import { Component } from '@angular/core';
import { HotelsService } from '../../services/hotels/hotels.service';
import { RouterModule } from '@angular/router';
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
constructor(private hotelsService: HotelsService , private trips:TripsService) { }

hotels: any = [];

ngOnInit() {
  this.hotelsService.getHotels().subscribe((data:any) => {
    this.hotels = data.data.slice(0, 4);

  });

}
}
