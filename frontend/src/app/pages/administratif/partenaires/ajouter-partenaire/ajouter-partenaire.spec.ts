import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPartenaire } from './ajouter-partenaire';

describe('AjouterPartenaire', () => {
  let component: AjouterPartenaire;
  let fixture: ComponentFixture<AjouterPartenaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterPartenaire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPartenaire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
