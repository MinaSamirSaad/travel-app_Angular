import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  queryUpdated: EventEmitter<string> = new EventEmitter();

  updateQuery(query: string) {
    this.queryUpdated.emit(query);
  }
  public searchSubject = new BehaviorSubject<string>("");
  search$: Observable<string> = this.searchSubject.asObservable();

  sendSearch(searchTerm: string) {
    this.searchSubject.next(searchTerm);
  }
}
