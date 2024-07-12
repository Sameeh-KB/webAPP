// src/app/search/recipe-detail.model.ts

export interface RecipeDetail {
    recipe: {
      label: string;
      image: string;
      calories: number;
      ingredientLines: string[];
      instructions: string[];
      totalTime: number;
      yield: number;
    };
  }
  