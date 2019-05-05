import { TestBed } from '@angular/core/testing';

import { BeerArchiveService } from './beer-archive.service';

describe('BeerArchiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerArchiveService = TestBed.get(BeerArchiveService);
    expect(service).toBeTruthy();
  });
});
