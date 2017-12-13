import { Recipe } from './../recipe.model';


import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private acRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.acRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm();
      }
    );
  }

  onSubmit() {
    // const name = this.recipeForm.value['name'];
    // const desc = this.recipeForm.value['description'];
    // const imagePath = this.recipeForm.value['imagePath'];
    // const ingredients = this.recipeForm.value['ingredients'];
    // const newRecipe = new Recipe(name, desc, imagePath, ingredients);
    const newRecipe = this.recipeForm.value;

    console.log(newRecipe);
    if (this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addNewRecipe(newRecipe);
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.acRoute});
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null,
          [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)] )
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  initForm() {
    let recipeName = '';
    let recipeImagPath = '';
    let recipeDescription = '';
    // tslint:disable-next-line:prefer-const
    let recipeIngredients = new FormArray([]);

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagPath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        // tslint:disable-next-line:prefer-const
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
              new FormGroup(
                {
                  'name': new FormControl(ingredient.name, Validators.required),
                  'amount': new FormControl(ingredient.amount,
                    [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
                }
              )
            );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagPath, Validators.required),
       'description' : new FormControl(recipeDescription, Validators.required),
       'ingredients': recipeIngredients
    });
  }

}
