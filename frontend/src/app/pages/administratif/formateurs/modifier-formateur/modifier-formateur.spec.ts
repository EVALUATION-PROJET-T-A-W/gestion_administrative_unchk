import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFormateur } from './modifier-formateur';

describe('ModifierFormateur', () => {
  let component: ModifierFormateur;
  let fixture: ComponentFixture<ModifierFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
