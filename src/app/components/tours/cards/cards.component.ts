import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { PaginatorModule } from "primeng/paginator";
import { ButtonModule } from "primeng/button";
import { Subscription } from "rxjs";
import { TripsService } from "../../../services/trips/trips.service";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from "../../../pipes/filter.pipe";
import { CardComponent } from "../../card/card.component";
import { LoadingComponent } from "../../loading/loading.component";

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: "app-cards",
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    HttpClientModule,
    FilterPipe,
    ButtonModule,
    PaginatorModule,
    LoadingComponent,
  ],
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class CardsComponent implements OnInit {
  // search functionality
  trips!: any;
  isTrip: boolean = true;
  category: string = "";
  searchTerm: string = "";
  displayedTrips: any[] = [];
  itemsPerPage = 9;
  currentPage = 1;
  totalPages = 0;
  //pagination
  private subscription!: Subscription;
  private categorySubscription!: Subscription;
  constructor(private _TripsService: TripsService) {}

  ngOnInit(): void {
    this.subscription = this._TripsService.search.subscribe({
      next: (term) => {
        this.searchTerm = term;
        this.updateDisplayedProducts();
      },
    });
    this.categorySubscription = this._TripsService.category.subscribe({
      next: (category: any) => {
        this.category = category.code;
        if (this.category) {
          this.currentPage = 1;

          const displayedTrips = this.trips.filter((item: any) =>
            item.categoryName
              .toLowerCase()
              .includes(this.category.toLowerCase())
          );

          this.totalPages = Math.ceil(
            displayedTrips.length / this.itemsPerPage
          );

          this.updateDisplayedProducts();
        } else {
          this.totalPages = Math.ceil(this.trips.length / this.itemsPerPage);
          this.updateDisplayedProducts();
        }
      },
    });
    // ------------------
    this._TripsService.getTrips().subscribe({
      next: ({ data }) => {
        this.trips = data;
        this.totalPages = Math.ceil(this.trips.length / this.itemsPerPage);
        this.updateDisplayedProducts();
      },
    });
  }

  // show more pagination
  updateDisplayedProducts(): void {
    if (!this.trips) return;
    if (this.searchTerm) {
      if (!this.category) this.displayedTrips = this.trips;
      else
        this.displayedTrips = this.trips.filter((item: any) =>
          item.categoryName.toLowerCase().includes(this.category.toLowerCase())
        );
      console.log(this.displayedTrips);
      return;
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    if (!this.category)
      this.displayedTrips = this.trips.slice(startIndex, endIndex);
    else
      this.displayedTrips = this.trips
        .filter((item: any) =>
          item.categoryName.toLowerCase().includes(this.category.toLowerCase())
        )
        .slice(startIndex, endIndex);

    console.log(this.displayedTrips);
    console.log("current page", this.currentPage);
    console.log("totalPages", this.totalPages);
  }
  loadNextPage(): void {
    this.currentPage++;
    this.updateDisplayedProducts();
  }
  loadPrevPage(): void {
    this.currentPage--;
    this.updateDisplayedProducts();
  }
  //paginaion

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }
}
