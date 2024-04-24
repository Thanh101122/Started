import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe, NgFor } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [
    NgFor,
    CurrencyPipe,
    AsyncPipe
  ],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent{
  constructor(private cartService: CartService) { }

  shippingCosts!: Observable<{ type: string, price: number }[]>;

//
}
