import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardComponent } from '../../../components/card/card.component';
import {
  CountriesService,
} from '../../../services/countries/countries.service';
import { HotelsService } from '../../../services/hotels/hotels.service';
import { TripsService } from '../../../services/trips/trips.service';

@Component({
  selector: 'app-one-country',
  standalone: true,
  imports: [HttpClientModule , CardComponent ],
  providers: [CountriesService , HotelsService , TripsService],
  templateUrl: './one-country.component.html',
  styleUrl: './one-country.component.css'
})
export class OneCountryComponent implements OnInit{
  tripsData: any = []
  constructor(private route : ActivatedRoute,private CountriesService: CountriesService , private TripsService : TripsService) {}
  countryName : any;
  filterdTrips : any = []
  ngOnInit(): void {
    this.route.params.subscribe({
      next:  (params) => {
        this.TripsService.getTrips().subscribe({
          next: (data) => {
            this.tripsData = data.data;
            console.log(this.tripsData)
            this.countryName = params["id"];
            console.log(this.countryName);
            this.filterdTrips = this.tripsData.filter((trip : any) => trip.name === this.countryName)
           console.log(this.filterdTrips);
          }
        })
      },
    });
  }
}
