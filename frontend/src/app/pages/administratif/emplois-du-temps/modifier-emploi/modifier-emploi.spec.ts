import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEmploi } from './modifier-emploi';

describe('ModifierEmploi', () => {
  let component: ModifierEmploi;
  let fixture: ComponentFixture<ModifierEmploi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierEmploi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierEmploi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
