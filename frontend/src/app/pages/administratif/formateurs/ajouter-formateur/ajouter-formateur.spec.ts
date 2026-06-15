import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFormateur } from './ajouter-formateur';

describe('AjouterFormateur', () => {
  let component: AjouterFormateur;
  let fixture: ComponentFixture<AjouterFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
