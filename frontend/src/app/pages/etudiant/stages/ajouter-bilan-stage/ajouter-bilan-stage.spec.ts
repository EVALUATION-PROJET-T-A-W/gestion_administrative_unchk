import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBilanStage } from './ajouter-bilan-stage';

describe('AjouterBilanStage', () => {
  let component: AjouterBilanStage;
  let fixture: ComponentFixture<AjouterBilanStage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterBilanStage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterBilanStage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
