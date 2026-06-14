import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateursFormation } from './formateurs-formation';

describe('FormateursFormation', () => {
  let component: FormateursFormation;
  let fixture: ComponentFixture<FormateursFormation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormateursFormation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateursFormation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
