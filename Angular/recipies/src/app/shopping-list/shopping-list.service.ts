import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import {Subject} from 'rxjs';
export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ing: Ingredient){
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());

  }
  addIngredientList(ing: Ingredient[]){
    //this.ingredients.push(...ing);
    this.ingredients = this.ingredients.concat(ing);
    this.ingredientsChanged.next(this.ingredients.slice());

  }
}
