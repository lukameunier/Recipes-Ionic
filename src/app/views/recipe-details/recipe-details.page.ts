import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonCol,
  IonRow,
  IonButton,
  IonLabel,
  IonImg,
  IonList,
  IonIcon,
  IonCard,
  IonFabButton
} from '@ionic/angular/standalone';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipesRepository } from 'src/app/repository/recipes-repository';
import { Recipe } from 'src/app/data/recipe';
import { Ingredient } from 'src/app/data/ingredient';

import { addIcons } from 'ionicons';
import { add, remove, imagesSharp, close, camera, image } from 'ionicons/icons';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

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

  imageUrl: string | null = null;

  // 👉 état de ton popup custom
  showImagePopup = false;

  constructor(
    private recipesRepository: RecipesRepository,
    private route: ActivatedRoute
  ) {
    addIcons({ add, remove, imagesSharp, camera, close, image });
  }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name != null) {
      this.recipe = this.recipesRepository.getRecipe(name);
      if (this.recipe) {
        this.currentServings = this.recipe.servings;
        this.imageUrl = (this.recipe as any).image || (this.recipe as any).imageUrl || this.recipe.img || null;
      }
    }
  }

  increaseServings() {
    if (this.recipe) this.currentServings++;
  }

  decreaseServings() {
    if (this.recipe && this.currentServings > 1) this.currentServings--;
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

  // 👉 ouvre ton popup custom
  openImagePopup() {
    this.showImagePopup = true;
  }

  // 👉 ferme ton popup custom
  closeImagePopup() {
    this.showImagePopup = false;
  }

  async pickFromCamera() {
    await this.pickImage(CameraSource.Camera);
    this.closeImagePopup();
  }

  async pickFromGallery() {
    await this.pickImage(CameraSource.Photos);
    this.closeImagePopup();
  }

  private async pickImage(source: CameraSource) {
    try {
      if (Capacitor.getPlatform() !== 'web') {
        await Camera.requestPermissions();
      }

      const image = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source
      });

      this.imageUrl = image.dataUrl ?? null;

      if (this.recipe && this.imageUrl) {
        (this.recipe as any).image = this.imageUrl;
      }

    } catch (err) {
      console.log('User cancelled or error: ', err);
    }
  }
}
