import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsAllComponent } from './participants-all.component';

describe('ParticipantsAllComponent', () => {
  let component: ParticipantsAllComponent;
  let fixture: ComponentFixture<ParticipantsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
