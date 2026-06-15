import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBudget } from './modifier-budget';

describe('ModifierBudget', () => {
  let component: ModifierBudget;
  let fixture: ComponentFixture<ModifierBudget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierBudget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierBudget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
