import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCompteRenduFormateur } from './ajouter-compte-rendu-formateur';

describe('AjouterCompteRenduFormateur', () => {
  let component: AjouterCompteRenduFormateur;
  let fixture: ComponentFixture<AjouterCompteRenduFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterCompteRenduFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCompteRenduFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
