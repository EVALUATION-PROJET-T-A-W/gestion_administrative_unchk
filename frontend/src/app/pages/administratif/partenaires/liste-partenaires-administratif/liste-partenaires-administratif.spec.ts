import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePartenairesAdministratif } from './liste-partenaires-administratif';

describe('ListePartenairesAdministratif', () => {
  let component: ListePartenairesAdministratif;
  let fixture: ComponentFixture<ListePartenairesAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePartenairesAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePartenairesAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
