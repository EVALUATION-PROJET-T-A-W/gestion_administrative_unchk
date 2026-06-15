import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierCompteRendu } from './publier-compte-rendu';

describe('PublierCompteRendu', () => {
  let component: PublierCompteRendu;
  let fixture: ComponentFixture<PublierCompteRendu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublierCompteRendu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublierCompteRendu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
