import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReunion } from './ajouter-reunion';

describe('AjouterReunion', () => {
  let component: AjouterReunion;
  let fixture: ComponentFixture<AjouterReunion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterReunion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterReunion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
