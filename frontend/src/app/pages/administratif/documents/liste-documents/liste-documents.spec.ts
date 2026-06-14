import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDocuments } from './liste-documents';

describe('ListeDocuments', () => {
  let component: ListeDocuments;
  let fixture: ComponentFixture<ListeDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDocuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDocuments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
