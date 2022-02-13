import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Participant, SportsType} from "../../models/participant.model";

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.scss']
})

export class ParticipantFormComponent implements OnInit, OnChanges {

  @Input() participant = new Participant();
  @Output() submitted = new EventEmitter();

  participantForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && ['participant'] && this.participant) {
      this.updateForm(this.participant)
    }
  }

  initForm() {
    this.participantForm = this.formBuilder.group({
      name: ['', Validators.required],
      language: ['', Validators.required],
      sportsType: [SportsType, Validators.required],
      eventDate: [new Date(), Validators.required],
      place: [0, Validators.required]
    });
  }

  get SportsType() {
    return SportsType;
  }

  updateForm(participant: Participant) {
    this.participantForm.patchValue({
      ...participant
    });
  }

  submit() {
    const participant: Participant = new Participant(this.participantForm.value);

    this.submitted.emit(participant);
  }
}
