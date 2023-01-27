import { TestBed } from '@angular/core/testing';

import { PublishNowGuard } from './publish-now.guard';

describe('PublishNowGuard', () => {
  let guard: PublishNowGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublishNowGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
