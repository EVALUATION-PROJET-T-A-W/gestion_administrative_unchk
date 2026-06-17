import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantsFormateur } from './etudiants-formateur';

describe('EtudiantsFormateur', () => {
  let component: EtudiantsFormateur;
  let fixture: ComponentFixture<EtudiantsFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantsFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantsFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
