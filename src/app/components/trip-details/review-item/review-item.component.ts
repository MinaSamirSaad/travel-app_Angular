import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RatingModule } from "primeng/rating";

@Component({
  selector: "app-review-item",
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: "./review-item.component.html",
  styleUrl: "./review-item.component.css",
})
export class ReviewItemComponent {
  @Input() review: any;
  value = 2;
}
