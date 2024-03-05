import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private user:UserService) { }
  private router = inject(Router);
  myRegForm = new FormGroup({
    userName:new FormControl(null,[]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)])
  })

  get emailValid(){
    return this.myRegForm.controls["email"];
  }
  get passValid(){
    return this.myRegForm.controls["password"];
  }

  getData(){
    if(this.myRegForm.valid){
      this.user.register(this.myRegForm.value).subscribe({
        next: (data:any) => {
          localStorage.setItem("token",data.data.token);
          localStorage.setItem("user",JSON.stringify(data.data.user));
          this.router.navigate(["/home"]);
        },
        error: (err) => {
          console.log(err);
        },
      })
    }
      console.log("name: ",this.myRegForm.controls["userName"].value);
      console.log("email: ",this.myRegForm.controls["email"].value);
      console.log("pass: ",this.myRegForm.controls["password"].value);
  }
  navigateToHome() {
    this.router.navigate(["/home"]);
  }
}
