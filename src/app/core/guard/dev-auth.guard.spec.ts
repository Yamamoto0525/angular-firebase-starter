import { TestBed, async, inject } from '@angular/core/testing';

import { DevAuthGuard } from './dev-auth.guard';

describe('DevAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevAuthGuard]
    });
  });

  it('should ...', inject([DevAuthGuard], (guard: DevAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
