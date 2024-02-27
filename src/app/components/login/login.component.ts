import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


// form validation
myRegForm = new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  pass:new FormControl(null,[Validators.required,Validators.minLength(8)])
})

get emailValid(){
  return this.myRegForm.controls["email"];
}
get passValid(){
  return this.myRegForm.controls["pass"];
}

getData(){
  if(this.myRegForm.valid){
    //push
  }
    console.log("email: ",this.myRegForm.controls["email"].value);
    console.log("pass: ",this.myRegForm.controls["pass"].value);
}

}