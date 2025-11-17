import { Component, Input } from '@angular/core';
import { IonRow, IonCol, IonLabel, IonImg } from '@ionic/angular/standalone';
import { Recipe } from 'src/app/data/recipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  imports: [IonRow, IonCol, IonLabel, IonImg]
})
export class RecipeComponent {
  @Input() recipe!: Recipe;
}
