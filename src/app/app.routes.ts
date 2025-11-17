import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'recipes',
    loadComponent: () => import('./views/recipes/recipes.page').then( m => m.RecipesPage)
  },
];
