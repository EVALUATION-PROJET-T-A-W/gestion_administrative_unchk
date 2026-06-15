import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBudget } from './ajouter-budget';

describe('AjouterBudget', () => {
  let component: AjouterBudget;
  let fixture: ComponentFixture<AjouterBudget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterBudget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterBudget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
