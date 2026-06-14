import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelechargerDocument } from './telecharger-document';

describe('TelechargerDocument', () => {
  let component: TelechargerDocument;
  let fixture: ComponentFixture<TelechargerDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelechargerDocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelechargerDocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
