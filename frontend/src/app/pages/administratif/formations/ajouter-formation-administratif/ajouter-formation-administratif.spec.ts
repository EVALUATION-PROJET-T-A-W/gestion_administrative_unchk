import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormationAdministratif } from './ajouter-formation-administratif';

describe('AjouterFormationAdministratif', () => {
  let component: AjouterFormationAdministratif;
  let fixture: ComponentFixture<AjouterFormationAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterFormationAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFormationAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
