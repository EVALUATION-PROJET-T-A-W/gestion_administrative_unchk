import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCompteRendu } from './modifier-compte-rendu';

describe('ModifierCompteRendu', () => {
  let component: ModifierCompteRendu;
  let fixture: ComponentFixture<ModifierCompteRendu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierCompteRendu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCompteRendu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
