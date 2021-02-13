import { TestBed } from '@angular/core/testing';

import { ForemanfileService } from './foremanfile.service';

describe('ForemanfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForemanfileService = TestBed.get(ForemanfileService);
    expect(service).toBeTruthy();
  });
});
