import { Recipe } from '../data/recipe';

export abstract class RecipesRepository {
    public abstract recipes: Recipe[];
    public abstract getRecipe(name: string): Recipe | undefined;
    public abstract updateRecipeImage(name: string, img: string): void;
}
