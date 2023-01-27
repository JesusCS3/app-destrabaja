import { TestBed } from '@angular/core/testing';

import { LevelsServiceService } from './levels-service.service';

describe('LevelsServiceService', () => {
  let service: LevelsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
