import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdministratif } from './register-administratif';

describe('RegisterAdministratif', () => {
  let component: RegisterAdministratif;
  let fixture: ComponentFixture<RegisterAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
