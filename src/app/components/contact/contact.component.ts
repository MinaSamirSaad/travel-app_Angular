import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,MessagesModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  isSent: boolean = false;
successMessage : Message[] = [];

ngOnInit(): void {
  this.successMessage = [
    { severity: 'success', summary: 'Success :', detail: 'Your message sent successfully' },
];
}


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
       this.isSent = true;
       this.contact.reset();
      },
      (error) => {
        alert('Email failed to send! :');
      },
    );
}

}
