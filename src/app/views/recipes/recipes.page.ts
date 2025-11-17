import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol } from '@ionic/angular/standalone';
import { RecipesRepository } from 'src/app/repository/recipes-repository';
import { RecipeComponent} from 'src/app/views/recipe/recipe.component';
import { Recipe } from 'src/app/data/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol, RecipeComponent]
})
export class RecipesPage {

  get recipes(): Recipe[] {
    return this.recipesRepository.recipes;
  }

  constructor(private recipesRepository: RecipesRepository) {}

  goToInfosPage() {
    console.log("Coucou");
  }
}
