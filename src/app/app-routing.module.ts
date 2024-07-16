import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { DailyRecipeComponent } from './daily-recipe/daily-recipe.component';
import { FavoriteComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'daily-recipe', component: DailyRecipeComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'recipe-details/:uri', component: RecipeDetailsComponent },
  {path: '**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
