
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './search/recipe.model'; 

interface SearchResponse {
  hits: Recipe[];
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiKey = 'YOUR_EDAMAM_API_KEY';
  private appId = 'YOUR_EDAMAM_APP_ID';
  private favouritesKey = 'favourites';

  constructor(private http: HttpClient) { }

  searchRecipes(ingredients: string): Observable<any> {
    const url = `https://api.edamam.com/search?q=${ingredients}&app_id=${this.appId}&app_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  addToFavourites(recipe: any): void {
    let favourites = this.getFavourites();
    if (!favourites.some((fav: any) => fav.recipe.uri === recipe.recipe.uri)) {
      favourites.push(recipe);
      localStorage.setItem(this.favouritesKey, JSON.stringify(favourites));
    }
  }

  removeFromFavourites(recipe: any): void {
    let favourites = this.getFavourites();
    favourites = favourites.filter((fav: any) => fav.recipe.uri !== recipe.recipe.uri);
    localStorage.setItem(this.favouritesKey, JSON.stringify(favourites));
  }

  getFavourites(): any[] {
    return JSON.parse(localStorage.getItem(this.favouritesKey) || '[]');
  }
}
