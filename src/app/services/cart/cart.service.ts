import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food } from '../../shared/models/Food';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(food:Food):void{
    this.cart.items.push(new CartItem(food));
  }

  updateCart():Cart{
    return this.cart;
  }

  changeQuantity(id:number, quantity:number):void{
    for (let item of this.cart.items)
      if(item.food.id == id)
        item.quantity = quantity;
  }

  removeItem(id:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id !=id);
  }
}
