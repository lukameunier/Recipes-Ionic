import { Recipe } from '../data/recipe';

export abstract class RecipesRepository {
    public abstract recipes: Recipe[];
}
