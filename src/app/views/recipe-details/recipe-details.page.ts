import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonRow, IonButton, IonLabel, IonImg, IonList, IonIcon, IonCard } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { RecipesRepository } from 'src/app/repository/recipes-repository';
import { Recipe } from 'src/app/data/recipe';
import { addIcons } from 'ionicons';
import { add, remove } from 'ionicons/icons';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol, IonRow, IonButton, IonLabel, IonImg, IonList, IonIcon, IonCard],
})
export class RecipeDetailsPage implements OnInit {

  recipe: Recipe | undefined = undefined;

  constructor(private recipesRepository: RecipesRepository, private route: ActivatedRoute) {
    addIcons({ add, remove });
  }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name != null) {
      this.recipe = this.recipesRepository.getRecipe(name);
    }
  }
}
