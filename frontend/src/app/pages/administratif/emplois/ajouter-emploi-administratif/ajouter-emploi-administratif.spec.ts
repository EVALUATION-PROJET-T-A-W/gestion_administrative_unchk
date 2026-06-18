import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmploiAdministratif } from './ajouter-emploi-administratif';

describe('AjouterEmploiAdministratif', () => {
  let component: AjouterEmploiAdministratif;
  let fixture: ComponentFixture<AjouterEmploiAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterEmploiAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEmploiAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
