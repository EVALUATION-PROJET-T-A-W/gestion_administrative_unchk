import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierStage } from './modifier-stage';

describe('ModifierStage', () => {
  let component: ModifierStage;
  let fixture: ComponentFixture<ModifierStage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierStage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierStage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
