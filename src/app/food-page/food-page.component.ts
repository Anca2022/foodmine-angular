import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent implements OnInit {
  food!:Food; 
  constructor(private route:ActivatedRoute, 
    private foodService:FoodService, 
    private cartService:CartService,
    private router:Router){  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.food = this.foodService.getFoodById(params['id']);
    })
  }
  addToCart():void{
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
