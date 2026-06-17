import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFormateur } from './notification-formateur';

describe('NotificationFormateur', () => {
  let component: NotificationFormateur;
  let fixture: ComponentFixture<NotificationFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
