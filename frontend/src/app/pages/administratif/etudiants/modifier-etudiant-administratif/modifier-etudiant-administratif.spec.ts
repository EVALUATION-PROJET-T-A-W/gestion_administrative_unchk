import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEtudiantAdministratif } from './modifier-etudiant-administratif';

describe('ModifierEtudiantAdministratif', () => {
  let component: ModifierEtudiantAdministratif;
  let fixture: ComponentFixture<ModifierEtudiantAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierEtudiantAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierEtudiantAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
