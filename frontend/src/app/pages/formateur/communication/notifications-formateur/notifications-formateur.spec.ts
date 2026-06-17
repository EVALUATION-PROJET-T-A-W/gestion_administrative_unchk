import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsFormateur } from './notifications-formateur';

describe('NotificationsFormateur', () => {
  let component: NotificationsFormateur;
  let fixture: ComponentFixture<NotificationsFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
