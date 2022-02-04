import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsReadComponent } from './participants-read.component';

describe('ParticipantsReadComponent', () => {
  let component: ParticipantsReadComponent;
  let fixture: ComponentFixture<ParticipantsReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
