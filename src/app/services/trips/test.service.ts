import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TestService {
  public search = new BehaviorSubject<string>("");
}
