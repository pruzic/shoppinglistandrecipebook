import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(f: NgForm){
    const value = f.value;
    this.shoppingListService.addIngredient({name: value.name, amount: value.amount});
  }

}
