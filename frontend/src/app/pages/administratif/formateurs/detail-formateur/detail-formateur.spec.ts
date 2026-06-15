import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormateur } from './detail-formateur';

describe('DetailFormateur', () => {
  let component: DetailFormateur;
  let fixture: ComponentFixture<DetailFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
