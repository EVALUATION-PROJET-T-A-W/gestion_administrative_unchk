import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaFormation } from './ma-formation';

describe('MaFormation', () => {
  let component: MaFormation;
  let fixture: ComponentFixture<MaFormation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaFormation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaFormation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
