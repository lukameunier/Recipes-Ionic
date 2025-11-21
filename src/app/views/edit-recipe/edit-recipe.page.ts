import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonItem, IonInput, IonRow, IonButton, IonIcon, IonCheckbox, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { RecipesRepository } from 'src/app/repository/recipes-repository';
import { Recipe } from 'src/app/data/recipe';

import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
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

  constructor(
    private recipesRepository: RecipesRepository,
    private route: ActivatedRoute
  ) {
    addIcons({ trash });
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

  deleteIngredient(index: number) {
    this.recipe!.ingredients.splice(index, 1);
  }

  checkedItems = []


  onCheckboxChange(event: any) {
    if (event.detail.checked) {
      this.recipe.ingredients.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else {
      this.recipe.ingredients = [...this.originalIngredients];
    }
  }

  addIngredient() {
    this.recipe.ingredients.push({ name: '', quantity: 0, unit: '' });
  }
}