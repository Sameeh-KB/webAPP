import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showDailyRecipe = true;

  onSearchInitiated(searching: boolean): void {
    this.showDailyRecipe = !searching;
  }
}
