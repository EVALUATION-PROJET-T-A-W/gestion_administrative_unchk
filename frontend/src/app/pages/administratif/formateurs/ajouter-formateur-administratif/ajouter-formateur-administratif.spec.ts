import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormateurAdministratif } from './ajouter-formateur-administratif';

describe('AjouterFormateurAdministratif', () => {
  let component: AjouterFormateurAdministratif;
  let fixture: ComponentFixture<AjouterFormateurAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterFormateurAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFormateurAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
