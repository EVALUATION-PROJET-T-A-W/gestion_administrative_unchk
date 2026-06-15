import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesEmploisDuTemps } from './mes-emplois-du-temps';

describe('MesEmploisDuTemps', () => {
  let component: MesEmploisDuTemps;
  let fixture: ComponentFixture<MesEmploisDuTemps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesEmploisDuTemps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesEmploisDuTemps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
