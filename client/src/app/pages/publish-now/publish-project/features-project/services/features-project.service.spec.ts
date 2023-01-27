import { TestBed } from '@angular/core/testing';

import { FeaturesProjectService } from './features-project.service';

describe('FeaturesProjectService', () => {
  let service: FeaturesProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
