import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdministratif } from './dashboard-administratif';

describe('DashboardAdministratif', () => {
  let component: DashboardAdministratif;
  let fixture: ComponentFixture<DashboardAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
