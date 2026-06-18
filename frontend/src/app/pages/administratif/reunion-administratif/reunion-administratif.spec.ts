import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionAdministratif } from './reunion-administratif';

describe('ReunionAdministratif', () => {
  let component: ReunionAdministratif;
  let fixture: ComponentFixture<ReunionAdministratif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReunionAdministratif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReunionAdministratif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
