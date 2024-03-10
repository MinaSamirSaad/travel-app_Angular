import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-domestic",
  standalone: true,
  imports: [],
  templateUrl: "./domestic.component.html",
  styleUrl: "./domestic.component.css",
})
export class DomesticComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  goMarsa() {
    this.router.navigate([`domestic/Marsa Alam`]);
  }

  goTaba() {
    this.router.navigate([`domestic/Taba`]);
  }

  goDahab() {
    this.router.navigate([`domestic/Dahab`]);
  }

  goGouna() {
    this.router.navigate([`domestic/El gouna`]);
  }

  goSahl() {
    this.router.navigate([`domestic/Sahl hasheesh`]);
  }

  goSharm() {
    this.router.navigate([`countries/Sharm el sheikh`]);
  }
}
