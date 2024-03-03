import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // form validation
contact = new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  message:new FormControl(null,[Validators.required]),
  userName:new FormControl(null,[]),
})

get emailValid(){
  return this.contact.controls["email"];
}
get messageValid(){
  return this.contact.controls["message"];
}

getData(){
  if(this.contact.valid){
    //push
  }
  this.contact.reset();
    console.log("email: ",this.contact.controls["email"].value);
    console.log("message: ",this.contact.controls["message"].value);
}

}
