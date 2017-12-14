
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Recipe } from '../recipes/recipe.model';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from './../recipes/recipe.service';
import { AuthService } from './../auth/auth.service';


@Injectable()
export class DataStorageService{
constructor(private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService) {}


saveRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-9877b.firebaseio.com/recipe-book.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-recipe-book-9877b.firebaseio.com/recipe-book.json?auth=' + token)
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
