import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesComptesRendus } from './mes-comptes-rendus';

describe('MesComptesRendus', () => {
  let component: MesComptesRendus;
  let fixture: ComponentFixture<MesComptesRendus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesComptesRendus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesComptesRendus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
