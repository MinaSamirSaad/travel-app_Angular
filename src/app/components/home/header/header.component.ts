import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import {
  IsActiveMatchOptions,
  NavigationEnd,
  Router,
  RouterModule,
} from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  isScrolled: boolean = false;
  isFavouriteActive: boolean = false;
  constructor(private router: Router) {}
  @HostListener("window:scroll", [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 300;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const options: IsActiveMatchOptions = {
          paths: "exact",
          queryParams: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
        };
        this.isFavouriteActive = this.router.isActive("favourite", options);
      }
    });
  }
}
