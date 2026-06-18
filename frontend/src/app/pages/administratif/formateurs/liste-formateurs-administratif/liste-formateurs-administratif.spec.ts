import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormateursAdministratif } from './liste-formateurs-administratif';

describe('ListeFormateursAdministratif', () => {
  let component: ListeFormateursAdministratif;
  let fixture: ComponentFixture<ListeFormateursAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFormateursAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFormateursAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
