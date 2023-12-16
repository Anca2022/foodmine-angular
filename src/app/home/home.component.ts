import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  foods!:Food[]; 
    
  constructor(private foodService:FoodService){ }
  
  ngOnInit(): void { 
    this.foods = this.foodService.getAll(); 
  }

  
}
