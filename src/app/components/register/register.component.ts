import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myRegForm = new FormGroup({
    name:new FormControl(null,[]),
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
      console.log("name: ",this.myRegForm.controls["name"].value);
      console.log("email: ",this.myRegForm.controls["email"].value);
      console.log("pass: ",this.myRegForm.controls["pass"].value);
  }

}
