import { Injectable } from '@angular/core';
import { Recipe } from '../data/recipe';
import { RecipesRepository } from './recipes-repository';

@Injectable({
  providedIn: 'root',
})
export class RecipesRepositoryDummyImpl extends RecipesRepository {
  public recipes: Recipe[] = [
    {
      name: 'Simple Cake',
      prep_time: 10,
      cook_time: 30,
      servings: 12,
      ingredients: [
        '200g sugar',
        '125g butter',
        '2 eggs',
        '12,5cl milk',
        '200g flour',
        '10g baking powder'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo.`
      ]
    },
    {
      name: 'Chocolate Cake',
      prep_time: 15,
      cook_time: 25,
      servings: 8,
      ingredients: [
        '200g chocolate',
        '200g sugar',
        '125g butter',
        '4 eggs',
        '125g flour',
        '5g baking powder'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo.`
      ]
    },
    {
      name: 'Clafoutis',
      prep_time: 15,
      cook_time: 25,
      servings: 8,
      ingredients: [
        '6 pears',
        '180g sugar',
        '10g butter',
        '6 eggs',
        '50cl liquid cream',
        '25cl milk',
        '125g flour'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo.`
      ]
    },
  ];
}
