import { TestBed } from '@angular/core/testing';

import { RecipeAPIService } from './recipe-api.service';

describe('RecipeAPIService', () => {
  let service: RecipeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
