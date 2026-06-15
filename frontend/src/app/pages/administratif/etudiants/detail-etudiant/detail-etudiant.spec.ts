import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEtudiant } from './detail-etudiant';

describe('DetailEtudiant', () => {
  let component: DetailEtudiant;
  let fixture: ComponentFixture<DetailEtudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEtudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEtudiant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
