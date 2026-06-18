import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDocumentsAdministratif } from './liste-documents-administratif';

describe('ListeDocumentsAdministratif', () => {
  let component: ListeDocumentsAdministratif;
  let fixture: ComponentFixture<ListeDocumentsAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDocumentsAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDocumentsAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
