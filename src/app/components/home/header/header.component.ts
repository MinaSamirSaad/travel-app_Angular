import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  isScrolled: boolean = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 300;
  }
}
