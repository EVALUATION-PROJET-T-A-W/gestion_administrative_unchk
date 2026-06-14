import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Circulaires } from './circulaires';

describe('Circulaires', () => {
  let component: Circulaires;
  let fixture: ComponentFixture<Circulaires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Circulaires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Circulaires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
