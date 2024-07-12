import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DailyRecipeComponent } from './daily-recipe/daily-recipe.component';
import { FavoriteComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { RecipeApiService } from './recipe-api.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DailyRecipeComponent,
    FavoriteComponent,
    HomeComponent,
    FooterComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [RecipeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
