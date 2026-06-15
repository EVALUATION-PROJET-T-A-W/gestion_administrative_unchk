import { TestBed } from '@angular/core/testing';

import { Partenaire } from './partenaire';

describe('Partenaire', () => {
  let service: Partenaire;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Partenaire);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
