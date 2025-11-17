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
      img: 'assets/simple-white-cake.png',
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
      img: 'assets/chocolate-cake.jpg',
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
      img: 'assets/clafoutis.jpg',
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
    {
      name: 'Banana Bread',
      img: 'assets/banana-bread.jpg',
      prep_time: 15,
      cook_time: 50,
      servings: 10,
      ingredients: [
        '3 ripe bananas',
        '150g sugar',
        '80g butter',
        '2 eggs',
        '200g flour',
        '10g baking powder'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl.`
      ]
    },
    {
      name: 'Apple Pie',
      img: 'assets/apple-pie.webp',
      prep_time: 25,
      cook_time: 45,
      servings: 6,
      ingredients: [
        '4 apples',
        '200g flour',
        '100g butter',
        '100g sugar',
        '1 egg',
        '5g cinnamon'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl.`
      ]
    },
    {
      name: 'Muffins',
      img: 'assets/muffins.webp',
      prep_time: 10,
      cook_time: 20,
      servings: 12,
      ingredients: [
        '250g flour',
        '120g sugar',
        '80g butter',
        '2 eggs',
        '15cl milk',
        '10g baking powder'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl.`
      ]
    },
    {
      name: 'Pancakes',
      img: 'assets/pancakes.avif',
      prep_time: 10,
      cook_time: 10,
      servings: 4,
      ingredients: [
        '200g flour',
        '25cl milk',
        '2 eggs',
        '30g sugar',
        '20g butter',
        '1 pinch of salt'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl.`
      ]
    },
    {
      name: 'Tiramisu',
      img: 'assets/tiramisu.jpg',
      prep_time: 20,
      cook_time: 0,
      servings: 6,
      ingredients: [
        '250g mascarpone',
        '3 eggs',
        '80g sugar',
        '200g ladyfingers',
        '20cl coffee',
        '10g cocoa powder'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl.`
      ]
    },
    {
      name: 'Carrot Cake',
      img: 'assets/carrot-cake.jpg',
      prep_time: 20,
      cook_time: 40,
      servings: 8,
      ingredients: [
        '300g grated carrots',
        '150g sugar',
        '120g butter',
        '3 eggs',
        '200g flour',
        '10g baking powder'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl.`
      ]
    },
    {
      name: 'Cheesecake',
      img: 'assets/cheesecake.jpg',
      prep_time: 25,
      cook_time: 60,
      servings: 10,
      ingredients: [
        '500g cream cheese',
        '150g sugar',
        '3 eggs',
        '200g biscuits',
        '80g butter',
        '1 tsp vanilla extract'
      ],
      directions: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`,
        `Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar.`,
        `Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl.`
      ]
    }
  ];

  public getRecipe(name: string): Recipe | undefined {
    return this.recipes.find(recipe => recipe.name === name);
  }
}
