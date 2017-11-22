import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;

 constructor(private recipService: RecipeService) { }

 onSelected(){
   this.recipService.recipeSelected.emit(this.recipe);
  }


  ngOnInit() {
  }

}
