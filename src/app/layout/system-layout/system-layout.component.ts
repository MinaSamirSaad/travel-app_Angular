import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../components/home/header/header.component";
import { FooterComponent } from "../../components/app-footer2/footer/footer.component";

@Component({
  selector: "app-system-layout",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: "./system-layout.component.html",
  styleUrl: "./system-layout.component.css",
})
export class SystemLayoutComponent {}
