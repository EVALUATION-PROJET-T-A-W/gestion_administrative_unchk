import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStages } from './liste-stages';

describe('ListeStages', () => {
  let component: ListeStages;
  let fixture: ComponentFixture<ListeStages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeStages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeStages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
