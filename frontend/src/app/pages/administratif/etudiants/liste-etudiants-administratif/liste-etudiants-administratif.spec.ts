import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtudiantsAdministratif } from './liste-etudiants-administratif';

describe('ListeEtudiantsAdministratif', () => {
  let component: ListeEtudiantsAdministratif;
  let fixture: ComponentFixture<ListeEtudiantsAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEtudiantsAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtudiantsAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
