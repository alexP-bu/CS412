import { TestBed } from '@angular/core/testing';

import { SearchByBreedService } from './search-by-breed.service';

describe('SearchByBreedService', () => {
  let service: SearchByBreedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchByBreedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
