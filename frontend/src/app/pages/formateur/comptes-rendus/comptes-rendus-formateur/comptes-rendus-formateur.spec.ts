import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesRendusFormateur } from './comptes-rendus-formateur';

describe('ComptesRendusFormateur', () => {
  let component: ComptesRendusFormateur;
  let fixture: ComponentFixture<ComptesRendusFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptesRendusFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptesRendusFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
