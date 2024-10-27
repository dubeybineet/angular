import { TestBed } from '@angular/core/testing';

import { SortingDataService } from './sorting-data.service';

describe('SortingDataService', () => {
  let service: SortingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
