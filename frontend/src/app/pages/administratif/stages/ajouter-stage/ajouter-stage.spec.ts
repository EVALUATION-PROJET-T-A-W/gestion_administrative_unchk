import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStage } from './ajouter-stage';

describe('AjouterStage', () => {
  let component: AjouterStage;
  let fixture: ComponentFixture<AjouterStage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterStage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterStage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
