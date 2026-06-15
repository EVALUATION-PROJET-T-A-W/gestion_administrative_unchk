import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantsFormation } from './etudiants-formation';

describe('EtudiantsFormation', () => {
  let component: EtudiantsFormation;
  let fixture: ComponentFixture<EtudiantsFormation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantsFormation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantsFormation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
