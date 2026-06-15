import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEtudiant } from './ajouter-etudiant';

describe('AjouterEtudiant', () => {
  let component: AjouterEtudiant;
  let fixture: ComponentFixture<AjouterEtudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterEtudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEtudiant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
