import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEtudiantAdministratif } from './ajouter-etudiant-administratif';

describe('AjouterEtudiantAdministratif', () => {
  let component: AjouterEtudiantAdministratif;
  let fixture: ComponentFixture<AjouterEtudiantAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterEtudiantAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEtudiantAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
