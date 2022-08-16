import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()

export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('Mango & green-bean salad',
     'with honey and passion fruit dressing',
    'https://www.bbcgoodfoodme.com/wp-content/uploads/2022/08/mango-green-bean-salad-with-honey-passion-fruit-dressing.png',
     [
      new Ingredient('Mango', 4),
      new Ingredient('green-bean', 6),

     ]),
    new Recipe('Pizza', 'Deep-dish pizza',
    'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
    [
     new Ingredient('tomato sauce', 6),
     new Ingredient('cheese', 28),

    ])

  ];
  constructor(private shoppingListService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredientList(ingredients);

  }
  getRecipeById(index:number){
    return this.recipes.slice()[index];
  }
}
