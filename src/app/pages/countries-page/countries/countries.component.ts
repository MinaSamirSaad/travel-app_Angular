import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  OnInit,
} from '@angular/core';

import {
  CountriesService,
} from '../../../services/countries/countries.service';
import { HotelsService } from '../../../services/hotels/hotels.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [HttpClientModule],
  providers : [CountriesService , HotelsService],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',

})
export class CountriesComponent implements OnInit{
  constructor(private countriesService : CountriesService , private hotelsService : HotelsService){}
  countriesData : any;
  countries: any ;
  countrydiscription : any;
  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(
      {next :  (data) =>{this.countriesData = data
      this.countries = this.countriesData.data
      }
      }
    );
    this.hotelsService.getHotels();
  }

}
