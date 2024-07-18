import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';
import { Recipe } from '../search/recipe.model'; 

@Component({
  selector: 'app-daily-recipe',
  templateUrl: './daily-recipe.component.html',
  styleUrls: ['./daily-recipe.component.css']
})
export class DailyRecipeComponent implements OnInit {
  dailyRecipe: Recipe | null = null;

  constructor(private recipeService: RecipeApiService) {}

  ngOnInit(): void {
    this.loadDailyRecipe();
  }

  loadDailyRecipe(): void {
    this.recipeService.getDailyRecipe().subscribe(response => {
      this.dailyRecipe = response.hits[0]; 
    });
  }

  addToFavorites(recipe: Recipe): void {
    this.recipeService.addFavorite(recipe);
  }
}
