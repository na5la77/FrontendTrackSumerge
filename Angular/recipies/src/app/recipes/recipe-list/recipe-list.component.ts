import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test',
    'https://www.bbcgoodfoodme.com/wp-content/uploads/2022/08/mango-green-bean-salad-with-honey-passion-fruit-dressing.png'),
    new Recipe('A test recipe', 'this is a test',
    'https://www.bbcgoodfoodme.com/wp-content/uploads/2022/08/mango-green-bean-salad-with-honey-passion-fruit-dressing.png')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
