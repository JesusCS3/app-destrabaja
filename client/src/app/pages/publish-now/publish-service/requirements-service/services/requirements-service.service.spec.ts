import { TestBed } from '@angular/core/testing';

import { RequirementsServiceService } from './requirements-service.service';

describe('RequirementsServiceService', () => {
  let service: RequirementsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequirementsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
