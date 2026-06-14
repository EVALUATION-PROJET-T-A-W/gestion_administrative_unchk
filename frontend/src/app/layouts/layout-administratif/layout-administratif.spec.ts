import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdministratif } from './layout-administratif';

describe('LayoutAdministratif', () => {
  let component: LayoutAdministratif;
  let fixture: ComponentFixture<LayoutAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
