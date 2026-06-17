import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionsFormateur } from './reunions-formateur';

describe('ReunionsFormateur', () => {
  let component: ReunionsFormateur;
  let fixture: ComponentFixture<ReunionsFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReunionsFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReunionsFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
