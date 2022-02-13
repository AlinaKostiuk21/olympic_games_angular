import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTextConfirmComponent } from './dialog-text-confirm.component';

describe('DialogTextConfirmComponent', () => {
  let component: DialogTextConfirmComponent;
  let fixture: ComponentFixture<DialogTextConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTextConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTextConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
