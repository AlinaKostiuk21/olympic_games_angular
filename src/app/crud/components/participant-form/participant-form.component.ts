import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Participant, SportsType} from "../../models/participant.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";

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
    private datePipe: DatePipe,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && ['participant'] && this.participant){
      this.updateForm(this.participant)
    }
  }

  initForm() {
    this.participantForm = this.formBuilder.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      language: ['', Validators.required],
      sportsType: [SportsType.ChooseSportsType, Validators.required],
      eventDate: [new Date(), Validators.required],
      place: [0, Validators.required]
    });
  }

  get SportsType() {
    return SportsType;
  }

  updateForm(participant: Participant) {
    this.participantForm.patchValue({
      ... participant,
      eventDate: this.datePipe.transform(participant.eventDate, 'M/d/yy')
    });
  }

  submit() {
    const participant: Partial<Participant> = this.participantForm.value;

    this.submitted.emit(participant);
  }
}
