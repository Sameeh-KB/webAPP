import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  recipes: Recipe[] = [];
  filters = {
    haram: false,
    allergy: false
  };
  @Output() searchInitiated = new EventEmitter<boolean>();

  constructor(private recipeApiService: RecipeApiService) {}

  search() {

    this.searchInitiated.emit(true);  // Notify that search is happening


    this.recipeApiService.searchRecipes(this.query).subscribe(response => {
      this.recipes = response.hits;
      // Apply filters
      this.applyFilters();
    });
  }

  applyFilters() {
    this.recipes = this.recipes.filter((recipe: Recipe) => {
      const isHaramExcluded = !this.filters.haram || !this.isHaram(recipe);
      const isAllergenExcluded = !this.filters.allergy || !this.hasAllergen(recipe);
      return isHaramExcluded && isAllergenExcluded;
    });
  }

  private isHaram(recipe: Recipe): boolean {
    // Example logic to check if the recipe contains haram ingredients
    const haramIngredients = ['pork', 'alcohol'];
    return recipe.recipe.ingredientLines.some((ingredient: string) =>
      haramIngredients.some(haram => ingredient.toLowerCase().includes(haram))
    );
  }

  private hasAllergen(recipe: Recipe): boolean {
    // Example logic to check if the recipe contains allergens
    const allergens = ['peanuts', 'shellfish'];
    return recipe.recipe.ingredientLines.some((ingredient: string) =>
      allergens.some(allergen => ingredient.toLowerCase().includes(allergen))
    );
  }

  addToFavorites(recipe: Recipe): void {
    this.recipeApiService.addFavorite(recipe);
  }
}
