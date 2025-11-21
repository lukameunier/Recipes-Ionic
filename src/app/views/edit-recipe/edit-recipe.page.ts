import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonItem, IonInput, IonRow, IonButton, IonIcon, IonCheckbox, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { RecipesRepository } from 'src/app/repository/recipes-repository';
import { Recipe } from 'src/app/data/recipe';

import { addIcons } from 'ionicons';
import { trash, checkmark, close } from 'ionicons/icons';
import { Ingredient } from 'src/app/data/ingredient';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.page.html',
  styleUrls: ['./edit-recipe.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, CommonModule, FormsModule, IonItem, IonInput, IonRow, IonButton, IonIcon, IonCheckbox, IonLabel]
})
export class EditRecipePage implements OnInit {

  recipe!: Recipe;
  originalIngredients!: Ingredient[];

  checkedItems = []

  addIngredient = false

  newIngredient: Ingredient = {
    name: '',
    quantity: 0,
    unit: ''
  };

  constructor(
    private recipesRepository: RecipesRepository,
    private route: ActivatedRoute
  ) {
    addIcons({ trash, checkmark, close });
  }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name != null) {
      const found = this.recipesRepository.getRecipe(name);
      if (found) {
        this.recipe = found;

        this.originalIngredients = [...this.recipe.ingredients];
      }
    }
  }

  onCheckboxChange(event: any) {
    if (event.detail.checked) {
      this.recipe.ingredients.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else {
      this.recipe.ingredients = [...this.originalIngredients];
    }
  }

  deleteIngredient(index: number) {
    this.recipe!.ingredients.splice(index, 1);
  }

  addIngredientPopUp() {
    this.newIngredient = {
      name: '',
      quantity: 0,
      unit: ''
    };
    this.addIngredient = true;
  }

  closeAddIngredientPopup() {
    this.addIngredient = false;
  }

  confirmAddIngredient() {
    if (!this.newIngredient.name || !this.newIngredient.unit) {
      return;
    }

    this.recipe.ingredients.push({ ...this.newIngredient });
    this.originalIngredients = [...this.recipe.ingredients]; 

    this.addIngredient = false;
  }
}