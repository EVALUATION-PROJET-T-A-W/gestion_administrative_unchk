import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStagesAdministratif } from './liste-stages-administratif';

describe('ListeStagesAdministratif', () => {
  let component: ListeStagesAdministratif;
  let fixture: ComponentFixture<ListeStagesAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeStagesAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeStagesAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
