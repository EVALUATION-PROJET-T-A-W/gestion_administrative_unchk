import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPartenaire } from './modifier-partenaire';

describe('ModifierPartenaire', () => {
  let component: ModifierPartenaire;
  let fixture: ComponentFixture<ModifierPartenaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierPartenaire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierPartenaire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
