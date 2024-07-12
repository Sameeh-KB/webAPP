import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecipeComponent } from './daily-recipe.component';

describe('DailyRecipeComponent', () => {
  let component: DailyRecipeComponent;
  let fixture: ComponentFixture<DailyRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
