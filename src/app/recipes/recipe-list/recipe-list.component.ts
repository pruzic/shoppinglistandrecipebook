import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 @Output() recipeEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe 1", "This is simply a test",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlIAeL3h0ZXldD7Zqsu5qVv5aPsaVjY5Hd4cPUcaF3h5ZvA4A6Q"),
     new Recipe("A Test Recipe 2", "This is simply a test 2",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eUWCBUDvzCcVp9RByO6BauiXdaHRqfCcM-JmbrlbiI9wgNIZMQ")     
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeEvent.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
