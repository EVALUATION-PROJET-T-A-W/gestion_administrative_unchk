import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsAdministratif } from './notifications-administratif';

describe('NotificationsAdministratif', () => {
  let component: NotificationsAdministratif;
  let fixture: ComponentFixture<NotificationsAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
