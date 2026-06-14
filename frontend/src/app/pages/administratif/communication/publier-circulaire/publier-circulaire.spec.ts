import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierCirculaire } from './publier-circulaire';

describe('PublierCirculaire', () => {
  let component: PublierCirculaire;
  let fixture: ComponentFixture<PublierCirculaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublierCirculaire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublierCirculaire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
