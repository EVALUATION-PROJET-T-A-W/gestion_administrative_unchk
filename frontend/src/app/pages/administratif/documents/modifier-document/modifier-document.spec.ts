import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDocument } from './modifier-document';

describe('ModifierDocument', () => {
  let component: ModifierDocument;
  let fixture: ComponentFixture<ModifierDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierDocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierDocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
