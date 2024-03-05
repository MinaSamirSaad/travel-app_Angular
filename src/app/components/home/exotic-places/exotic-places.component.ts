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
      this.router.navigate([`country/Maldives`])
    }

    goThailand(){
      this.router.navigate([`country/Thailand`])
    }

    goGermany(){
      this.router.navigate([`country/Germany`])
    }
    goVietnam(){
      this.router.navigate([`country/Vietnam`])
    }

    // goSeychelles(){
    //   this.router.navigate([`country/Seychelles`])
    // }
}
