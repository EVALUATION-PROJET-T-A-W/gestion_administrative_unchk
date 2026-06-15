import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonEmploiDuTemps } from './mon-emploi-du-temps';

describe('MonEmploiDuTemps', () => {
  let component: MonEmploiDuTemps;
  let fixture: ComponentFixture<MonEmploiDuTemps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonEmploiDuTemps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonEmploiDuTemps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
