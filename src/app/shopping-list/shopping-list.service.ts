
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {
 ingredientsChanged = new Subject<Ingredient[]>();

  private  ingredients: Ingredient[]  = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

  getIngredients(){
      return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    console.log('New Ingredient Added: ' + newIngredient.name);
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
