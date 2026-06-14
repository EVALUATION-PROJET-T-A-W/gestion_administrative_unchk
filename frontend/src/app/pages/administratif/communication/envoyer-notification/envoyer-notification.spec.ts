import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerNotification } from './envoyer-notification';

describe('EnvoyerNotification', () => {
  let component: EnvoyerNotification;
  let fixture: ComponentFixture<EnvoyerNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvoyerNotification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvoyerNotification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
