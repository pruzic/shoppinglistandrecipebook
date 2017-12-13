
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { RecipeService } from './../recipes/recipe.service';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../recipes/recipe.model';


@Injectable()
export class DataStorageService{
constructor(private http: Http, private recipeService: RecipeService) {}


saveRecipes() {
    return this.http.put('https://ng-recipe-book-9877b.firebaseio.com/recipe-book.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-9877b.firebaseio.com/recipe-book.json')
    .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        // tslint:disable-next-line:prefer-const
        for (let recipe of recipes ){
            if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
            }
        }
        return recipes;

    })
    .subscribe((recipesData: Recipe[]) => {
      this.recipeService.setRecipes(recipesData);
    });
  }

}
