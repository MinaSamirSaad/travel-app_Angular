import { Component } from '@angular/core';
import { PayComponent } from '../../components/pay/pay.component';

@Component({
  selector: 'app-pay-page',
  standalone: true,
  imports: [PayComponent],
  templateUrl: './pay-page.component.html',
  styleUrl: './pay-page.component.css'
})
export class PayPageComponent {

}
