import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 recipe: Recipe;
 id: number;

  constructor(private recipeService: RecipeService,
    private acRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe =  this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.acRoute});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.acRoute});
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
