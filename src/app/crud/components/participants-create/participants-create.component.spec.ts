import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsCreateComponent } from './participants-create.component';

describe('ParticipantsCreateComponent', () => {
  let component: ParticipantsCreateComponent;
  let fixture: ComponentFixture<ParticipantsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
