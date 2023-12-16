import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit{
  constructor(private foodService:FoodService){}
  tags:Tag[]=[];
   ngOnInit(): void {
     this.tags = this.foodService.getAllTags();
   }
  
}
