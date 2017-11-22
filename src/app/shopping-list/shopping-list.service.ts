import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
export class ShoppingListService {
 ingredientsChanged = new EventEmitter<Ingredient[]>();

  private  ingredients: Ingredient[]  = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
    console.log('New Ingredient Added: ' + newIngredient.name);
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
