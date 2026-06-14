import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDocument } from './ajouter-document';

describe('AjouterDocument', () => {
  let component: AjouterDocument;
  let fixture: ComponentFixture<AjouterDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterDocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterDocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
