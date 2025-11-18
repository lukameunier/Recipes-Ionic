import { Ingredient } from "./ingredient";

export interface Recipe {
    name: string;
    img: string;
    prep_time: number;
    cook_time: number;
    servings: number;
    ingredients: Ingredient[];
    directions: string[];
}
