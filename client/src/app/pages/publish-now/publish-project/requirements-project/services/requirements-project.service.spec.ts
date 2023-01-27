import { TestBed } from '@angular/core/testing';

import { RequirementsProjectService } from './requirements-project.service';

describe('RequirementsProjectService', () => {
  let service: RequirementsProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequirementsProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
