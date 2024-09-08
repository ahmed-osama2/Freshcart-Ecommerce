import { TestBed } from '@angular/core/testing';

import { PrandsService } from './prands.service';

describe('PrandsService', () => {
  let service: PrandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
