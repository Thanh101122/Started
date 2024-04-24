import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgFor,
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

    items = this.cartService.getItems();

    constructor(
      private cartService: CartService
    ){}
}
