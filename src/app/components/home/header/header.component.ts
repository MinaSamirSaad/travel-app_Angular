import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import {
  ActivatedRoute,
  IsActiveMatchOptions,
  NavigationEnd,
  Router,
  RouterModule,
} from "@angular/router";
import { UserService } from "../../../services/user/user.service";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private user: UserService,
    private activatedRoute: ActivatedRoute
  ) {}
  isScrolled: boolean = false;
  isFavouriteActive: boolean = false;
  bgNavbar: boolean = false;

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

  userPicture:any;
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
    if(localStorage.getItem('user')){
       this.userPicture = JSON.parse(localStorage.getItem('user')!).picture;
    }
  }
  logout() {
    if(localStorage.getItem('provider') === 'google'){
      // add logout from google here 
      localStorage.removeItem('provider');
      localStorage.clear()
      // reload the page
    }
    const favoriteTrips = JSON.parse(
      localStorage.getItem("favouriteTrips") || "[]"
    ).map((fav: any) => {return {tripId:fav._id}});
    console.log(JSON.parse(localStorage.getItem("favouriteTrips") || "[]"));
    console.log(favoriteTrips);
    this.user.addFavoriteTrips(favoriteTrips).subscribe({
      next: () => {
        this.user.logout().subscribe({
          next: () => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("favouriteTrips");
            localStorage.removeItem("bookedTrips");
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
    window.location.reload();
  }
// load session user data if there is a user in local storage


// userPicture:any;

// if(localStorage.getItem('user')){
//   const userPicture = JSON.parse(localStorage.getItem('user')?).picture;
// }
// userPicture:any= JSON.parse(localStorage.getItem('user')!).picture;
// name= JSON.parse(localStorage.getItem('user')!).name;



}
