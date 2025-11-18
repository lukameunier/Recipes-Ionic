import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { RecipesRepository } from 'src/app/repository/recipes-repository';
import { Recipe } from 'src/app/data/recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.page.html',
  styleUrls: ['./edit-recipe.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput]
})
export class EditRecipePage implements OnInit {
  recipe!: Recipe;

  constructor(
    private recipesRepository: RecipesRepository,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name != null) {
      const found = this.recipesRepository.getRecipe(name);
      if (found) {
        this.recipe = found;
      }
    }
  }
}
