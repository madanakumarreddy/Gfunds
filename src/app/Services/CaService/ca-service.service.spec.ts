import { TestBed } from '@angular/core/testing';

import { CaServiceService } from './ca-service.service';

describe('CaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaServiceService = TestBed.get(CaServiceService);
    expect(service).toBeTruthy();
  });
});
