import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent{
  cart!:Cart;
  constructor(private cartService:CartService){
    this.cart = cartService.updateCart();
  }
  
  changeQuantity(id:number, quantityString:string){
    let quantity = parseInt(quantityString);
    this.cartService.changeQuantity(id, quantity);
  }

  removeItem(id:number){
    this.cartService.removeItem(id);
  }
  
  
}
