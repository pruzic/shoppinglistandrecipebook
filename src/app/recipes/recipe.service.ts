import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply a test',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlIAeL3h0ZXldD7Zqsu5qVv5aPsaVjY5Hd4cPUcaF3h5ZvA4A6Q',
         [
           new Ingredient('Pork meat', 1),
           new Ingredient('Beef meat', 2)
          ]),
         new Recipe('A Test Recipe 2', 'This is simply a test 2',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eUWCBUDvzCcVp9RByO6BauiXdaHRqfCcM-JmbrlbiI9wgNIZMQ',
        [
          new Ingredient('Lamb meat', 3),
          new Ingredient('Chicken', 3)
        ])
      ];

    constructor(private shoppingList: ShoppingListService){}

    getRecipes(){
     return this.recipes.slice();
    }

    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.shoppingList.addIngredients(ingredients);
    }
}

