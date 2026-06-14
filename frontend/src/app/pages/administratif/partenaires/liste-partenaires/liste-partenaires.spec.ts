import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePartenaires } from './liste-partenaires';

describe('ListePartenaires', () => {
  let component: ListePartenaires;
  let fixture: ComponentFixture<ListePartenaires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePartenaires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePartenaires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
