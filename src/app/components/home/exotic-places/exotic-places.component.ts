import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exotic-places',
  standalone: true,
  imports: [],
  templateUrl: './exotic-places.component.html',
  styleUrl: './exotic-places.component.css'
})
export class ExoticPlacesComponent {
  constructor(private router : Router) {

    }
    goMaldives() {
      this.router.navigate([`countries/Maldives`])
    }

    goThailand(){
      this.router.navigate([`countries/Thailand`])
    }

    goGermany(){
      this.router.navigate([`countries/Germany`])
    }
    goVietnam(){
      this.router.navigate([`countries/Vietnam`])
    }

    // goSeychelles(){
    //   this.router.navigate([`country/Seychelles`])
    // }
}
