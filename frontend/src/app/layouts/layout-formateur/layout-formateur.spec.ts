import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFormateur } from './layout-formateur';

describe('LayoutFormateur', () => {
  let component: LayoutFormateur;
  let fixture: ComponentFixture<LayoutFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
