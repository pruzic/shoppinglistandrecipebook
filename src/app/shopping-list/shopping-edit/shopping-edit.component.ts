import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @Output() onAddedIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddedItem(){
    const ingrName = this.nameInputRef.nativeElement.value;
    const ingrAmount = this.amountInputRef.nativeElement.value;
    // this.onAddedIngredient.emit({name: ingrName, amount: ingrAmount});
    this.shoppingListService.addIngredient({name: ingrName, amount: ingrAmount});
  }

}
