import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesStages } from './mes-stages';

describe('MesStages', () => {
  let component: MesStages;
  let fixture: ComponentFixture<MesStages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesStages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesStages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
