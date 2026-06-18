import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursAdministratif } from './cours-administratif';

describe('CoursAdministratif', () => {
  let component: CoursAdministratif;
  let fixture: ComponentFixture<CoursAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
