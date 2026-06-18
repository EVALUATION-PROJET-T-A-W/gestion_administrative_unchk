import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculairesAdministratif } from './circulaires-administratif';

describe('CirculairesAdministratif', () => {
  let component: CirculairesAdministratif;
  let fixture: ComponentFixture<CirculairesAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculairesAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculairesAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
