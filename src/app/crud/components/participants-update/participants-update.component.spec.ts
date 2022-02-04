import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsUpdateComponent } from './participants-update.component';

describe('ParticipantsUpdateComponent', () => {
  let component: ParticipantsUpdateComponent;
  let fixture: ComponentFixture<ParticipantsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
