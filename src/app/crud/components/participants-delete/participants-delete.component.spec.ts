import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsDeleteComponent } from './participants-delete.component';

describe('ParticipantsDeleteComponent', () => {
  let component: ParticipantsDeleteComponent;
  let fixture: ComponentFixture<ParticipantsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
