import {Component, Input, OnInit} from '@angular/core';
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

  participant: Participant = new Participant();

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private participantService: ParticipantService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('params________', params);
      const participantId = Number(params['participant_id']);
      this.getParticipantById(participantId);
    })
  }

  getParticipantById(participantId: number) {
    console.log('__________', participantId);

    let participantObservable = this.participantService.getById(participantId);
    if (participantObservable) {
      participantObservable.subscribe((member: Participant) => {
        console.log('2__________', member);
        if (!member) {
          return;
        }
        console.log('__________', member);
        this.participant = member;
      })
    }
  }

  updateParticipant(participant: Participant) {
    this.participantService.update(participant)
      .subscribe((member) => {
          if (member) {
            this.router.navigate(['../../all'], { relativeTo: this.activatedRoute })
          }
        }
      )
  }
}
