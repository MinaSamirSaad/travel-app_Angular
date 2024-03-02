import { CommonModule } from '@angular/common';
import { Component ,ViewEncapsulation } from '@angular/core';
import { FormControl,FormsModule, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { CardComponent } from '../card/card.component';
import { HttpClient } from '@angular/common/http';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule ,FormsModule , ButtonModule , CardModule , RatingModule,CardComponent],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class PayComponent {


  constructor(){
    render({
      id:"#myPaymentButtons",
      currency:"USD",
      value:"100.00",
      onApprove:(details)=>{
        
        alert("Transaction successfull");

      }
    });
  
  }


  
//initialize payment stripe
/*
amount?:number;
token?:string;

 stripePromise=loadStripe("pk_test_51MU8ssDftpBp1rw3lUGy6Fsy5RRyhLyfds091voLDxi6LRfmV51TKhtb449c2IEBFnDynaPBZzF54pBJTJf60bzx00OP8oAFXF")


 constructor(private http:HttpClient) { }

 async handleSumit(){
  const stripe=await this.stripePromise;
  const {token,error}=await stripe?.createToken("card");

  if(error){
    console.log("error",error);
    return;
 }
this.http.post("/api/payment",{amount:this.amount,token:token.id}).subscribe((res)=>{

  if(res==="success"){
    console.log("payment was successful");}else{
      console.log("payment failed");
    } 

 })
}
*/




// card component
value: number = 3;
  isHovered: boolean = false;
  isClicked: boolean = false;
  
  addedToFav() {
    console.log("added to fav");
  }

  toggleFavourite() {
    this.isClicked = !this.isClicked;
    // Call addedToFav() method if you want to execute the function on click
    this.addedToFav();
  }





  // form component
  myRegForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    cNumber:new FormControl(null,[Validators.required,Validators.maxLength(14) , Validators.minLength(14)]),
    ccExp:new FormControl(null,[Validators.required,Validators.maxLength(5) , Validators.minLength(5)]),
    ccv:new FormControl(null,[Validators.required,Validators.maxLength(3) , Validators.minLength(3)]),
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
    return this.myRegForm.controls["ccv"];
  }

  getData(){
    if(this.myRegForm.valid){
      //push
    }
      console.log("email: ",this.myRegForm.controls["email"].value);
      console.log("cNumber: ",this.myRegForm.controls["cNumber"].value);
  }


}
