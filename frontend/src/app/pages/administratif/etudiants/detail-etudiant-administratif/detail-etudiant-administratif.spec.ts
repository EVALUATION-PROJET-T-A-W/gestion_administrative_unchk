import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEtudiantAdministratif } from './detail-etudiant-administratif';

describe('DetailEtudiantAdministratif', () => {
  let component: DetailEtudiantAdministratif;
  let fixture: ComponentFixture<DetailEtudiantAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEtudiantAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEtudiantAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
