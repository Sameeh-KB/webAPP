import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeApiService } from '../recipe-api.service';
import { RecipeDetail } from '../search/recipe-details.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetail: RecipeDetail | null = null;

  constructor(
    private recipeApiService: RecipeApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const uri = params.get('uri');
      if (uri) {
        this.recipeApiService.getRecipeDetail(uri).subscribe(response => {
          this.recipeDetail = response;
        });
      }
    });
  }
}
