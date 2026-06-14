import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEmploi } from './ajouter-emploi';

describe('AjouterEmploi', () => {
  let component: AjouterEmploi;
  let fixture: ComponentFixture<AjouterEmploi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterEmploi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEmploi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
