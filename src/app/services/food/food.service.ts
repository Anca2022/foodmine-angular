import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Food{
    return this.getAll().find(food=> food.id == id)!;
  }


  getFoodsByTag(tag:string):Food[]{
    if (tag =='All') 
      return this.getAll();
    else return this.getAll().filter(food => food.tags?.includes(tag));
  }

  

  getFoodBySearchTerm(searchTerm:string):Food[]{
    let foods:Food[]=[];
    this.getAll().forEach(element => {
      if (element.name.toLowerCase().includes(searchTerm.toLowerCase())) foods.push(element); 
    })
    return foods;    
    
  }

  getAllTags():Tag[]{
    return [
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 3 },
      { name: 'Lunch', count: 4 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 2 },
      { name: 'Vegetarian', count: 1 },
    ];
  }

  getAll():Food[] {
    return [
      {
        id: 1,
        name: 'Veggie Bowl',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Vegetarian', 'Lunch'],
      },
      {
        id: 2,
        name: 'Steak',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Loaded Fries',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken with Spinach',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 6,
        name: 'Fish and salad',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Fry', 'Lunch'],
      },
    ]
  } 
}
