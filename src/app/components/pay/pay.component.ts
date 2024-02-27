import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {
  myRegForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    cNumber:new FormControl(null,[Validators.required,Validators.maxLength(14) , Validators.minLength(14)]),
    ccExp:new FormControl(null,[Validators.required,Validators.maxLength(5) , Validators.minLength(5)]),
    ccv:new FormControl(null,[Validators.required,Validators.maxLength(5) , Validators.minLength(5)]),
  })

  get emailValid(){
    return this.myRegForm.controls["email"];
  }
  get cNumberValid(){
    return this.myRegForm.controls["cNumber"];
  }
  get ccExpValid(){
    return this.myRegForm.controls["ccExp"];
  }
  get ccvValid(){
    return this.myRegForm.controls["ccExp"];
  }

  getData(){
    if(this.myRegForm.valid){
      //push
    }
      console.log("email: ",this.myRegForm.controls["email"].value);
      console.log("cNumber: ",this.myRegForm.controls["cNumber"].value);
  }

}
