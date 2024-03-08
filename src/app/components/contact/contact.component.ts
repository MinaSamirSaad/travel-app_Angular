import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MessagesModule } from 'primeng/messages';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

router = inject(Router);


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


navigateToHome() {
  this.router.navigate(["/home"]);
}


// EmailJS code

public sendEmail(e: Event) {
  e.preventDefault();

  emailjs
    .sendForm('service_jp47jgo', 'template_7prb66t', e.target as HTMLFormElement, {
      publicKey: 'xYFJLbZvj_biToKdL',
    })
    .then(
      () => {
       alert('Email sent successfully!'); 
       this.contact.reset();
      },
      (error) => {
        alert('Email failed to send! :' + error.text);
      },
    );
}

}
