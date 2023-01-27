import { TestBed } from '@angular/core/testing';

import { GeneralInfoProjectService } from './general-info-project.service';

describe('GeneralInfoProjectService', () => {
  let service: GeneralInfoProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralInfoProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
