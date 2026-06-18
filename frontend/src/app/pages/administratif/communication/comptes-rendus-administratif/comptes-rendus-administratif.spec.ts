import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesRendusAdministratif } from './comptes-rendus-administratif';

describe('ComptesRendusAdministratif', () => {
  let component: ComptesRendusAdministratif;
  let fixture: ComponentFixture<ComptesRendusAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptesRendusAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptesRendusAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
