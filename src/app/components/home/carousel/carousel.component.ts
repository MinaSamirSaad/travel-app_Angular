import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  constructor(private router : Router) {}
  goFrance() {
    console.log("hereee")
    this.router.navigate([`countries/France`])
  }

  goMaldives() {
    this.router.navigate([`countries/Maldives`])
  }

  goVietnam(){
    this.router.navigate([`countries/Vietnam`])
  }
}
