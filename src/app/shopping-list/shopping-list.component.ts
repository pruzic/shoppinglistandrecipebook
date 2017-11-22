import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { isNgContainer } from '@angular/compiler';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ing: Ingredient[]) => { this.ingredients = ing; }
    );
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   // this.ingredients.push(ingredient);
  //   this.shoppingListService.addIngredient(ingredient);
  // }

}
