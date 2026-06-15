import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBudgets } from './liste-budgets';

describe('ListeBudgets', () => {
  let component: ListeBudgets;
  let fixture: ComponentFixture<ListeBudgets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeBudgets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBudgets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
