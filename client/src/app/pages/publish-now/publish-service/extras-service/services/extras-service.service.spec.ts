import { TestBed } from '@angular/core/testing';

import { ExtrasServiceService } from './extras-service.service';

describe('ExtrasServiceService', () => {
  let service: ExtrasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtrasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
