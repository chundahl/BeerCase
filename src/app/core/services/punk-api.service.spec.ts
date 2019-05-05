import { TestBed } from '@angular/core/testing';

import { PunkAPIService } from './punk-api.service';

describe('PunkAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PunkAPIService = TestBed.get(PunkAPIService);
    expect(service).toBeTruthy();
  });
});
