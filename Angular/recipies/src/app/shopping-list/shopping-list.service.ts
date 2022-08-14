import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ing: Ingredient){
    this.ingredients.push(ing);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
  addIngredientList(ing: Ingredient[]){
    //this.ingredients.push(...ing);
    this.ingredients = this.ingredients.concat(ing);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
}
