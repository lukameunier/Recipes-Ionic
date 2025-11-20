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
        { name: 'sugar', quantity: 200, unit: 'g' },
        { name: 'butter', quantity: 125, unit: 'g' },
        { name: 'egg', quantity: 2, unit: 'pcs' },
        { name: 'milk', quantity: 12.5, unit: 'cl' },
        { name: 'flour', quantity: 200, unit: 'g' },
        { name: 'baking powder', quantity: 10, unit: 'g' }
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
        { name: 'chocolate', quantity: 200, unit: 'g' },
        { name: 'sugar', quantity: 200, unit: 'g' },
        { name: 'butter', quantity: 125, unit: 'g' },
        { name: 'egg', quantity: 4, unit: 'pcs' },
        { name: 'flour', quantity: 125, unit: 'g' },
        { name: 'baking powder', quantity: 5, unit: 'g' }
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
        { name: 'pear', quantity: 6, unit: 'pcs' },
        { name: 'sugar', quantity: 180, unit: 'g' },
        { name: 'butter', quantity: 10, unit: 'g' },
        { name: 'egg', quantity: 6, unit: 'pcs' },
        { name: 'liquid cream', quantity: 50, unit: 'cl' },
        { name: 'milk', quantity: 25, unit: 'cl' },
        { name: 'flour', quantity: 125, unit: 'g' }
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
        { name: 'ripe banana', quantity: 3, unit: 'pcs' },
        { name: 'sugar', quantity: 150, unit: 'g' },
        { name: 'butter', quantity: 80, unit: 'g' },
        { name: 'egg', quantity: 2, unit: 'pcs' },
        { name: 'flour', quantity: 200, unit: 'g' },
        { name: 'baking powder', quantity: 10, unit: 'g' }
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
        { name: 'apple', quantity: 4, unit: 'pcs' },
        { name: 'flour', quantity: 200, unit: 'g' },
        { name: 'butter', quantity: 100, unit: 'g' },
        { name: 'sugar', quantity: 100, unit: 'g' },
        { name: 'egg', quantity: 1, unit: 'pcs' },
        { name: 'cinnamon', quantity: 5, unit: 'g' }
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
        { name: 'flour', quantity: 250, unit: 'g' },
        { name: 'sugar', quantity: 120, unit: 'g' },
        { name: 'butter', quantity: 80, unit: 'g' },
        { name: 'egg', quantity: 2, unit: 'pcs' },
        { name: 'milk', quantity: 15, unit: 'cl' },
        { name: 'baking powder', quantity: 10, unit: 'g' }
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
        { name: 'flour', quantity: 200, unit: 'g' },
        { name: 'milk', quantity: 25, unit: 'cl' },
        { name: 'egg', quantity: 2, unit: 'pcs' },
        { name: 'sugar', quantity: 30, unit: 'g' },
        { name: 'butter', quantity: 20, unit: 'g' },
        { name: 'salt', quantity: 1, unit: 'pinch' }
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
        { name: 'mascarpone', quantity: 250, unit: 'g' },
        { name: 'egg', quantity: 3, unit: 'pcs' },
        { name: 'sugar', quantity: 80, unit: 'g' },
        { name: 'ladyfingers', quantity: 200, unit: 'g' },
        { name: 'coffee', quantity: 20, unit: 'cl' },
        { name: 'cocoa powder', quantity: 10, unit: 'g' }
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
        { name: 'grated carrots', quantity: 300, unit: 'g' },
        { name: 'sugar', quantity: 150, unit: 'g' },
        { name: 'butter', quantity: 120, unit: 'g' },
        { name: 'egg', quantity: 3, unit: 'pcs' },
        { name: 'flour', quantity: 200, unit: 'g' },
        { name: 'baking powder', quantity: 10, unit: 'g' }
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
        { name: 'cream cheese', quantity: 500, unit: 'g' },
        { name: 'sugar', quantity: 150, unit: 'g' },
        { name: 'egg', quantity: 3, unit: 'pcs' },
        { name: 'biscuits', quantity: 200, unit: 'g' },
        { name: 'butter', quantity: 80, unit: 'g' },
        { name: 'vanilla extract', quantity: 1, unit: 'tsp' }
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

  public updateRecipeImage(name: string, img: string): void {
    const recipe = this.recipes.find(recipe => recipe.name === name);
    if (recipe) {
      recipe.img = img;
    }
  }
}
