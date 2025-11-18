import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    loadComponent: () => import('./views/recipes/recipes.page').then( m => m.RecipesPage)
  },
  {
    path: 'recipe-details/:name',
    loadComponent: () => import('./views/recipe-details/recipe-details.page').then( m => m.RecipeDetailsPage)
  },
  {
    path: 'edit-recipe/:name',
    loadComponent: () => import('./views/edit-recipe/edit-recipe.page').then( m => m.EditRecipePage)
  },
];
