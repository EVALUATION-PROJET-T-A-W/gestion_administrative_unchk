import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculairesFormateur } from './circulaires-formateur';

describe('CirculairesFormateur', () => {
  let component: CirculairesFormateur;
  let fixture: ComponentFixture<CirculairesFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculairesFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculairesFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
