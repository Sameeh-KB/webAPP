
// recipe.model.ts

export interface Recipe {
    recipe: {
      uri: string; // Add this line

      label: string;
      calories: number;
      image: string;
      ingredientLines: string[];
    };
  }
  