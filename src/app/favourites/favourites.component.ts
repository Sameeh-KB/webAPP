
import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service'; 

@Component({
  selector: 'app-favorites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavoriteComponent implements OnInit {
  favoriteRecipes: any[] = []; 

  constructor(private recipeService: RecipeApiService) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoriteRecipes = this.recipeService.getFavorites();
  }

  removeFromFavorites(recipe: any): void {
    this.recipeService.removeFavorite(recipe);
    this.loadFavorites();
  }
}
