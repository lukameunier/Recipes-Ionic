import { TestBed } from '@angular/core/testing';

import { RecipesRepositoryDummyImpl } from './recipes-repository-dummy-impl';

describe('RecipesRepositoryDummyImpl', () => {
  let service: RecipesRepositoryDummyImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesRepositoryDummyImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
