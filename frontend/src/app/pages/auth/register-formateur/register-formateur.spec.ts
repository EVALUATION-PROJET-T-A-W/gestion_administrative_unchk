import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormateur } from './register-formateur';

describe('RegisterFormateur', () => {
  let component: RegisterFormateur;
  let fixture: ComponentFixture<RegisterFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
