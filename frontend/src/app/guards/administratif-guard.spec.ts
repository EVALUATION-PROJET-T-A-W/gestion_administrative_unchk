import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { administratifGuard } from './administratif-guard';

describe('administratifGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => administratifGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
