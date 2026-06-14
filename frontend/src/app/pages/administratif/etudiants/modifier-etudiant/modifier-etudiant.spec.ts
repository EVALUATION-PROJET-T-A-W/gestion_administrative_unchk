import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEtudiant } from './modifier-etudiant';

describe('ModifierEtudiant', () => {
  let component: ModifierEtudiant;
  let fixture: ComponentFixture<ModifierEtudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierEtudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierEtudiant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
