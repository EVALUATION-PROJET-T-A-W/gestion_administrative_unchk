import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCompteRendu } from './ajouter-compte-rendu';

describe('AjouterCompteRendu', () => {
  let component: AjouterCompteRendu;
  let fixture: ComponentFixture<AjouterCompteRendu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterCompteRendu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCompteRendu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
