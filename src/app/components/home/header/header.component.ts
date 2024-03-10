import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component, HostListener } from "@angular/core";
import {
  ActivatedRoute,
  IsActiveMatchOptions,
  NavigationEnd,
  Router,
  RouterModule,
} from "@angular/router";
import { UserService } from "../../../services/user/user.service";
import { BadgeModule } from "primeng/badge";
import { TripsService } from "../../../services/trips/trips.service";
@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule, BadgeModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private user: UserService,
    private activatedRoute: ActivatedRoute,
    private _TripsService: TripsService
  ) {}
  isScrolled: boolean = false;
  isFavouriteActive: boolean = false;
  bgNavbar: boolean = false;
  countFavourites: any = 0;
  isLoggedIn: boolean = false;
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

  userPicture: any;
  ngOnInit() {
    this._TripsService.favoriteTripsCount$.subscribe((count) => {
      this.countFavourites = count;
    });
    this.isLoggedIn = !!localStorage.getItem("isLoggedIn");
    if (localStorage.getItem("isLoggedIn")) {
      this.countFavourites = JSON.parse(
        localStorage.getItem("favouriteTrips") || "[]"
      ).length;
    }
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
    if (localStorage.getItem("user")) {
      //  this.userPicture = JSON.parse(localStorage.getItem('user')!).picture;
      if (
        localStorage.getItem("provider") &&
        localStorage.getItem("provider") === "google"
      ) {
        this.userPicture = JSON.parse(localStorage.getItem("user")!).picture;
        console.log("=========> ", this.userPicture);
      } else {
        this.userPicture = JSON.parse(localStorage.getItem("user")!).image;
      }
    }
  }
  logout() {
    console.log("logout mounir");
    // if (localStorage.getItem("provider") === "google") {
    //   // add logout from google here
    //   localStorage.removeItem("provider");
    //   // reload the page
    // }
    const favoriteTrips = JSON.parse(
      localStorage.getItem("favouriteTrips") || "[]"
    ).map((fav: any) => {
      return { tripId: fav._id };
    });
    console.log(JSON.parse(localStorage.getItem("favouriteTrips") || "[]"));
    console.log(favoriteTrips);
    this.user.addFavoriteTrips(favoriteTrips).subscribe({
      next: () => {
        this.user.logout().subscribe({
          next: () => {
            localStorage.clear();
            this.userPicture = null; //here
            localStorage.removeItem("isLoggedIn");
            window.location.reload();
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  storePreviousRoute(): void {
    this.user.setPreviousUrl(this.router.url);
  }
}
