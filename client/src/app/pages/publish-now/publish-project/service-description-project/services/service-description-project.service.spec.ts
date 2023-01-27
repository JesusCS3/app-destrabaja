import { TestBed } from '@angular/core/testing';

import { ServiceDescriptionProjectService } from './service-description-project.service';

describe('ServiceDescriptionProjectService', () => {
  let service: ServiceDescriptionProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDescriptionProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
