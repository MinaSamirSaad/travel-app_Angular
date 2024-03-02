declare var google: any;

import { Component, inject } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { HeaderComponent } from "../home/header/header.component";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  private router = inject(Router);
  //google intialize
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:
        "74021032483-lm9ummnk7o7kovemrlkd826ul63u83hd.apps.googleusercontent.com",
      callback: (resp: any) => this.handleLogin(resp),
    });
    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      // theme: 'filled_blue',
      size: "large",
      shape: "rectangle",
      text: "continue with google",
      width: 300,
    });
  }

  // decode token
  private decodeToken(token: string) {
    return JSON.parse(atob(token.split(".")[1]));
  }

  // handling google login
  handleLogin(respone: any) {
    if (respone) {
      //deconde the token
      const payload = this.decodeToken(respone.credential);
      //store in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payload));
      //navigate to home
      this.router.navigate(["/home"]);
    }
  }

  LoginForm = new FormGroup({
    // email:new FormControl(null,[Validators.required,Validators.email]),
    // pass:new FormControl(null,[Validators.required,Validators.minLength(8)])
    email: new FormControl("", [Validators.required, Validators.email]),
    pass: new FormControl("", [
      Validators.required,
      Validators.pattern(/^\w{8,}$/),
    ]),
  });

  get emailValid() {
    return this.LoginForm.controls["email"];
  }
  get passValid() {
    return this.LoginForm.controls["pass"];
  }

  getData() {
    if (this.LoginForm.valid) {
      //push
    }
    console.log("email: ", this.LoginForm.controls["email"].value);
    console.log("pass: ", this.LoginForm.controls["pass"].value);
  }

  navigateToHome() {
    this.router.navigate(["/home"]);
  }
}
