import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmploisAdministratif } from './liste-emplois-administratif';

describe('ListeEmploisAdministratif', () => {
  let component: ListeEmploisAdministratif;
  let fixture: ComponentFixture<ListeEmploisAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEmploisAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEmploisAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
