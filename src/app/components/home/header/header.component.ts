import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import {
  ActivatedRoute,
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
  bgNavbar: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  @HostListener("window:scroll", [])
  onScroll(): void {
    // this.isScrolled = window.scrollY > 300;
    if (this.activatedRoute.firstChild?.snapshot.data["bgNav"]) {
      this.isScrolled = true;
    } else {
      this.isScrolled = window.scrollY > 300;
    }
    // this.isScrolled = this.activatedRoute.firstChild?.snapshot.data["bgNav"]
    //   ? window.scrollY > 0
    //   : window.scrollY > 300;
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
        this.isScrolled =
          this.activatedRoute.firstChild?.snapshot.data["bgNav"];
        this.isFavouriteActive = this.router.isActive("favourite", options);
        this.bgNavbar = !this.activatedRoute.firstChild?.snapshot.data["bgNav"];
      }
    });
  }
}
