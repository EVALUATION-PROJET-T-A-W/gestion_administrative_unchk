import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesFormationsFormateur } from './mes-formations-formateur';

describe('MesFormationsFormateur', () => {
  let component: MesFormationsFormateur;
  let fixture: ComponentFixture<MesFormationsFormateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesFormationsFormateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesFormationsFormateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
