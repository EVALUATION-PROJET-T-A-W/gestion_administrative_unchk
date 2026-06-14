import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEtudiant } from './register-etudiant';

describe('RegisterEtudiant', () => {
  let component: RegisterEtudiant;
  let fixture: ComponentFixture<RegisterEtudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEtudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterEtudiant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
