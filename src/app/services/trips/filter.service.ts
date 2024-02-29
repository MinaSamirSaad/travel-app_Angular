import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  private searchSubject = new BehaviorSubject<string>("");
  search$: Observable<string> = this.searchSubject.asObservable();

  sendSearch(searchTerm: string) {
    this.searchSubject.next(searchTerm);
  }
}
