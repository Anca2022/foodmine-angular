import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  foods:Food[]=[]; 
    
  constructor(private foodService:FoodService, private route:ActivatedRoute){ }
  
  ngOnInit(): void { 
      
    this.route.params.subscribe(param => {
        if(param['searchTerm'])
          this.foods = this.foodService.getFoodBySearchTerm(param['searchTerm']);
        else if(param['tagName'])
          this.foods = this.foodService.getFoodsByTag(param['tagName']);
        else this.foods = this.foodService.getAll(); 
      })
  }

}
