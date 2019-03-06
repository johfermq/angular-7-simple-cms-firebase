import { TestBed, async, inject } from '@angular/core/testing';

import { SuscriberGuard } from './suscriber.guard';

describe('SuscriberGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuscriberGuard]
    });
  });

  it('should ...', inject([SuscriberGuard], (guard: SuscriberGuard) => {
    expect(guard).toBeTruthy();
  }));
});
