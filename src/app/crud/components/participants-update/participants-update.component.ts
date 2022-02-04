import { Component, OnInit } from '@angular/core';
import {Participant, SportsType} from "../../models/participant.model";
import {FormBuilder, Validators} from "@angular/forms";
import {ParticipantService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-participants-update',
  templateUrl: './participants-update.component.html',
  styleUrls: ['./participants-update.component.scss']
})
export class ParticipantsUpdateComponent implements OnInit {

  participantsForm = this.formBuilder.group({
    id: [0, Validators.required],
    name: ['', Validators.required],
    language: ['', Validators.required],
    sportsType: [SportsType.ChooseSportsType, Validators.required],
    eventDate: [new Date(), Validators.required],
    place: [0, Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private participantService: ParticipantService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: {participant_id: number}) => {
      const participantId = params.participant_id;
      this.getParticipantById(participantId);
    })
  }

  get SportsType() {
    return SportsType;
  }

  getParticipantById(participantId: number) {
    this.participantService.getById(participantId)
      .subscribe((member: Participant) => {
        if (!member) {
          return;
        }

        this.updateForm(member);
      })
  }

  updateForm(participant: Participant) {
    this.participantsForm.patchValue({
      ... participant,
      eventDate: this.datePipe.transform(participant.eventDate, 'M/d/yy')
    });
  }

  updateParticipant() {
    const updatedParticipant = this.participantsForm.value;
    this.participantService.update(updatedParticipant)
      .subscribe((member) => {
          if (member) {
            this.router.navigate(['../../all'], { relativeTo: this.activatedRoute })
          }
        }
      )
  }
}
