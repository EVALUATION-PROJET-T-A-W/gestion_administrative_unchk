import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courrier } from './courrier';

describe('Courrier', () => {
  let component: Courrier;
  let fixture: ComponentFixture<Courrier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courrier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Courrier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
