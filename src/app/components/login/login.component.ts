declare var google: any;

import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 private router=inject(Router);
//google intialize
ngOnInit():void{
  google.accounts.id.initialize({
    client_id: '74021032483-lm9ummnk7o7kovemrlkd826ul63u83hd.apps.googleusercontent.com',
    callback: (resp:any)=>this.handleLogin(resp)
  });
  google.accounts.id.renderButton(document.getElementById("google-btn"),{
    // theme: 'filled_blue',
    size: 'large',
    shape: 'rectangle',
    text: 'continue with google',
    width:300,
  })
}

// decode token
private decodeToken(token:string){
  return JSON.parse(atob(token.split(".")[1]));
}

// handling google login 
handleLogin(respone:any){
  if(respone){
    //deconde the token
    const payload = this.decodeToken(respone.credential);
    //store in session
    sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
    //navigate to home
    this.router.navigate(['/home']);
  }
}


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