import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormationsAdministratif } from './liste-formations-administratif';

describe('ListeFormationsAdministratif', () => {
  let component: ListeFormationsAdministratif;
  let fixture: ComponentFixture<ListeFormationsAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFormationsAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFormationsAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
