import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDocumentAdministratif } from './ajouter-document-administratif';

describe('AjouterDocumentAdministratif', () => {
  let component: AjouterDocumentAdministratif;
  let fixture: ComponentFixture<AjouterDocumentAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterDocumentAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterDocumentAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
