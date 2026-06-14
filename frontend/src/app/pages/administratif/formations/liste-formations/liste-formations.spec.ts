import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormations } from './liste-formations';

describe('ListeFormations', () => {
  let component: ListeFormations;
  let fixture: ComponentFixture<ListeFormations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFormations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFormations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
