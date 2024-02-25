import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule,ButtonModule, RatingModule,FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  encapsulation: ViewEncapsulation.None

})
export class SliderComponent {

  time:number=200;
  products: any[]=[
    

  {name: 'Trip 1', rate:4, price: 150, image: 'p2.jpg' , des: 'This is the best Trip'},
  
  {name: 'Trip 2', rate: 3, price: 200, image: 'p3.jpg' , des: 'This is the best Trip'},

  {name: 'Trip 3', rate:4, price: 250, image: 'p4.jpg' , des: 'This is the best Trip'},

    {name: 'Trip 4', rate: 5, price: 100, image: 'p5.jpg' , des: 'This is the best Trip'},

  {name: 'Trip 5', rate: 3, price: 150, image: 'p6.jpg' , des: 'This is the best Trip'},
  
  {name: 'Trip 6', rate: 5, price: 200, image: 'p7.jpg' , des: 'This is the best Trip'},
  {name: 'Trip 7', rate:4, price: 150, image: 'p2.jpg' , des: 'This is the best trip'},


]


responsiveOptions = [
  {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
  },
  {
      breakpoint: '991px',
      numVisible: 3,
      numScroll: 1
  },
  {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
  },

];
}
