import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from './../recipe.model';
import { RecipeService } from '.././recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  constructor(private recipeService: RecipeService,
    private router: Router, private acRoute: ActivatedRoute){}

    subscription: Subscription;

  recipes: Recipe[] = [];

  ngOnInit() {
  this.subscription =  this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.acRoute});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
