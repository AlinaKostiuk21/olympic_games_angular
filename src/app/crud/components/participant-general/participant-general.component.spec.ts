import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantGeneralComponent } from './participant-general.component';

describe('ParticipantGeneralComponent', () => {
  let component: ParticipantGeneralComponent;
  let fixture: ComponentFixture<ParticipantGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
