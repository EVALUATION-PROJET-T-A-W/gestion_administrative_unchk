import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDuTempsFormateur } from './emploi-du-temps-formateur';

describe('EmploiDuTempsFormateur', () => {
  let component: EmploiDuTempsFormateur;
  let fixture: ComponentFixture<EmploiDuTempsFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploiDuTempsFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploiDuTempsFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
