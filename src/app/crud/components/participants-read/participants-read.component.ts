import { Component, OnInit } from '@angular/core';
import {ParticipantService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Participant} from "../../models/participant.model";

@Component({
  selector: 'app-participants-read',
  templateUrl: './participants-read.component.html',
  styleUrls: ['./participants-read.component.scss']
})
export class ParticipantsReadComponent implements OnInit {

  participant: Participant = new Participant();

  constructor(
    private participantService: ParticipantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

}
