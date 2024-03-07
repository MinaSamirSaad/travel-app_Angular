import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { PaginatorModule } from "primeng/paginator";
import { ButtonModule } from "primeng/button";
import { Subscription } from "rxjs";
import { TripsService } from "../../../services/trips/trips.service";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from "../../../pipes/filter.pipe";
import { CardComponent } from "../../card/card.component";

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
  ],
  templateUrl: "./cards.component.html",
  styleUrl: "./cards.component.css",
  encapsulation: ViewEncapsulation.None,
})
export class CardsComponent implements OnInit {
  // search functionality
  trips!: any;
  isTrip: boolean = true;
  searchTerm: string = "";
  // displayedTrips: any[] = [];
  // itemsPerPage = 9;
  // currentPage = 1;
  // totalPages = 0;
  //pagination
  first: number = 0;
  rows: number = 9;
  totalRecords: number = 0;
  displayedTrips: any[] = [];

  private subscription!: Subscription;
  private categorySubscription!: Subscription;
  constructor(
    private _TripsService: TripsService,
    private _FilterService: FilterService
  ) {}

  ngOnInit(): void {
    // if (!localStorage.getItem("favouriteTrips"))
    //   localStorage.setItem("favouriteTrips", "[]");
    this.subscription = this._TripsService.search.subscribe({
      next: (term) => {
        console.log({ term });
        this.searchTerm = term;
      },
    });
    this.categorySubscription = this._TripsService.category.subscribe({
      next: (category: any) => {
        console.log({ category });
        this.category = category.code;
      },
    });
    // ------------------
    // this._TripsService.getTrips().subscribe({
    //   next: ({ data }) => {
    //     // this.trips = data;
    //     // this.totalPages = Math.ceil(this.trips.length / this.itemsPerPage);
    //     // this.updateDisplayedProducts();

    //   },
    // });
    this._TripsService.getTrips().subscribe({
      next: ({ data }) => {
        this.totalRecords = data.length;
        this.trips = data;
        this.displayedTrips = this.trips.slice(
          this.first,
          this.first + this.rows
        );
      },
    });
  }

  // show more pagination
  // updateDisplayedProducts(): void {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   this.displayedTrips = this.trips.slice(0, endIndex);
  // }
  // loadNextPage(): void {
  //   this.currentPage++;
  //   this.updateDisplayedProducts();
  // }
  //paginaion

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.displayedTrips = this.trips.slice(this.first, this.first + this.rows);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }
}
