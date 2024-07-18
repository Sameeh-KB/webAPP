import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {

  private appId = '1429eb69';  
  private appKey = 'ef5a3b14860d2fb2cfc4be3100e6d4d7';  
  private apiUrl = 'https://api.edamam.com/search';
  private favorites: any[] = [];

  constructor(private http: HttpClient) { }

  searchRecipes(query: string): Observable<any> {
    let params = new HttpParams()
      .set('q', query)
      .set('app_id', this.appId)
      .set('app_key', this.appKey);
    return this.http.get(this.apiUrl, { params });
  }

  getDailyRecipe(): Observable<any> {
    let params = new HttpParams()
      .set('q', 'daily')
      .set('app_id', this.appId)
      .set('app_key', this.appKey);
    return this.http.get(this.apiUrl, { params });
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  addFavorite(recipe: any): void {
    if (!this.favorites.find(r => r.recipe.uri === recipe.recipe.uri)) {
      this.favorites.push(recipe);
    }
  }

  getRecipeDetail(uri: string): Observable<any> {
    const recipeId = uri.replace('http://www.edamam.com/ontologies/edamam.owl#', '');
    const detailUrl = `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${this.appId}&app_key=${this.appKey}`;
    return this.http.get(detailUrl);
  }
  // Remove a recipe from favorites
  removeFavorite(recipe: any): void {
    this.favorites = this.favorites.filter(r => r.recipe.uri !== recipe.recipe.uri);
  }
}
