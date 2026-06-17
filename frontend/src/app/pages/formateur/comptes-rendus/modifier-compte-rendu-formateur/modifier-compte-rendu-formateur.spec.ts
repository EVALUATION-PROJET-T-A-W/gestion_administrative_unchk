import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCompteRenduFormateur } from './modifier-compte-rendu-formateur';

describe('ModifierCompteRenduFormateur', () => {
  let component: ModifierCompteRenduFormateur;
  let fixture: ComponentFixture<ModifierCompteRenduFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierCompteRenduFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCompteRenduFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
