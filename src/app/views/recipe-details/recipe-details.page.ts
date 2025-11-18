import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonCol, IonRow, IonButton, IonLabel, IonImg, IonList, IonIcon, IonCard, IonFabButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { RecipesRepository } from 'src/app/repository/recipes-repository';
import { Recipe } from 'src/app/data/recipe';
import { Ingredient } from 'src/app/data/ingredient';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, remove, imagesSharp } from 'ionicons/icons';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle,
    CommonModule, FormsModule, IonCol, IonRow,
    IonButton, IonLabel, IonImg, IonList, IonIcon,
    RouterLink, IonCard, IonFabButton
],
})
export class RecipeDetailsPage implements OnInit {

  recipe: Recipe | undefined = undefined;

  currentServings = 0;

  constructor(
    private recipesRepository: RecipesRepository,
    private route: ActivatedRoute
  ) {
    addIcons({add, remove, imagesSharp});
  }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name != null) {
      this.recipe = this.recipesRepository.getRecipe(name);
      if (this.recipe) {
        this.currentServings = this.recipe.servings;
      }
    }
  }

  increaseServings() {
    if (this.recipe) {
      this.currentServings++;
    }
  }

  decreaseServings() {
    if (this.recipe && this.currentServings > 1) {
      this.currentServings--;
    }
  }

  getScaledQuantity(ingredient: Ingredient): number | undefined {
    if (!this.recipe || ingredient.quantity == null) {
      return ingredient.quantity;
    }
    const baseServings = this.recipe.servings;
    return ingredient.quantity * this.currentServings / baseServings;
  }

  capitalizeFirst(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}