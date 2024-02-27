import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [AutoCompleteModule , FormsModule , DropdownModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent {
  selectedCountry : string = '';
  filteredCountries : any;
  categories:any;
  selectedCategory:any;
  filterCountry(event : any){

  }
}
