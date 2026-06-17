import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReunionFormateur } from './ajouter-reunion-formateur';

describe('AjouterReunionFormateur', () => {
  let component: AjouterReunionFormateur;
  let fixture: ComponentFixture<AjouterReunionFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterReunionFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterReunionFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
