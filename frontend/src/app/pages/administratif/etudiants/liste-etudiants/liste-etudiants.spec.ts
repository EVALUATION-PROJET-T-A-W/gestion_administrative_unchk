import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtudiants } from './liste-etudiants';

describe('ListeEtudiants', () => {
  let component: ListeEtudiants;
  let fixture: ComponentFixture<ListeEtudiants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEtudiants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtudiants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
